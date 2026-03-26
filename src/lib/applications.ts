import { supabase } from '@/integrations/supabase/client';

export interface Application {
  id?: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  cover_letter: string;
  cv_url: string;
  cv_file_name: string;
  status: 'pending' | 'reviewed' | 'interviewed' | 'accepted' | 'rejected';
  applied_at: Date;
  reviewed_at?: Date;
  notes?: string;
}

// Upload CV to Supabase Storage
export const uploadCV = async (file: File, applicationId: string): Promise<string> => {
  const fileName = `${applicationId}_${file.name}`;
  const { error } = await supabase.storage
    .from('cvs')
    .upload(fileName, file);

  if (error) {
    console.error('Error uploading CV:', error);
    throw error;
  }

  const { data: urlData } = supabase.storage
    .from('cvs')
    .getPublicUrl(fileName);

  return urlData.publicUrl;
};

// Create new application
export const createApplication = async (
  applicationData: Omit<Application, 'id' | 'applied_at' | 'status'>,
  cvFile: File
): Promise<string> => {
  // Insert application first
  const { data, error } = await supabase
    .from('applications')
    .insert({
      name: applicationData.name,
      email: applicationData.email,
      phone: applicationData.phone,
      position: applicationData.position,
      experience: applicationData.experience,
      cover_letter: applicationData.cover_letter,
    })
    .select('id')
    .single();

  if (error || !data) {
    console.error('Error creating application:', error);
    throw error;
  }

  // Upload CV
  const cvUrl = await uploadCV(cvFile, data.id);

  // Update with CV URL
  await supabase
    .from('applications')
    .update({ cv_url: cvUrl, cv_file_name: cvFile.name })
    .eq('id', data.id);

  return data.id;
};

// Get all applications
export const getApplications = async (): Promise<Application[]> => {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .order('applied_at', { ascending: false });

  if (error) {
    console.error('Error fetching applications:', error);
    throw error;
  }

  return (data || []).map(row => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone || '',
    position: row.position,
    experience: row.experience,
    cover_letter: row.cover_letter || '',
    cv_url: row.cv_url || '',
    cv_file_name: row.cv_file_name || '',
    status: row.status as Application['status'],
    applied_at: new Date(row.applied_at),
    reviewed_at: row.reviewed_at ? new Date(row.reviewed_at) : undefined,
    notes: row.notes || '',
  }));
};

// Subscribe to applications in real-time
export const subscribeToApplications = (callback: (applications: Application[]) => void) => {
  // Initial fetch
  getApplications().then(callback);

  // Real-time subscription
  const channel = supabase
    .channel('applications-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'applications' }, () => {
      getApplications().then(callback);
    })
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};

// Update application status
export const updateApplicationStatus = async (id: string, status: Application['status'], notes?: string) => {
  const { error } = await supabase
    .from('applications')
    .update({
      status,
      reviewed_at: new Date().toISOString(),
      notes: notes || '',
    })
    .eq('id', id);

  if (error) {
    console.error('Error updating application:', error);
    throw error;
  }
};

// Delete application
export const deleteApplication = async (id: string) => {
  const { error } = await supabase
    .from('applications')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting application:', error);
    throw error;
  }
};

// Get applications by status
export const getApplicationsByStatus = async (status: Application['status']): Promise<Application[]> => {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('status', status)
    .order('applied_at', { ascending: false });

  if (error) {
    console.error('Error fetching applications by status:', error);
    throw error;
  }

  return (data || []).map(row => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone || '',
    position: row.position,
    experience: row.experience,
    cover_letter: row.cover_letter || '',
    cv_url: row.cv_url || '',
    cv_file_name: row.cv_file_name || '',
    status: row.status as Application['status'],
    applied_at: new Date(row.applied_at),
    reviewed_at: row.reviewed_at ? new Date(row.reviewed_at) : undefined,
    notes: row.notes || '',
  }));
};
