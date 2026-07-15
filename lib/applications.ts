import { fetchJson } from "./api-fetch";

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
  status: "pending" | "reviewed" | "interviewed" | "accepted" | "rejected";
  applied_at: Date;
  reviewed_at?: Date;
  notes?: string;
  crm_synced_at?: Date;
}

type ApiApplicationRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
  cvPath?: string | null;
  cvFileName?: string | null;
  status: Application["status"];
  appliedAt: string;
  reviewedAt?: string | null;
  notes?: string | null;
};

function mapApplication(row: ApiApplicationRow): Application {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone || "",
    position: row.position,
    experience: row.experience,
    cover_letter: row.coverLetter || "",
    cv_url: row.cvPath ? `/api/admin/applications/${row.id}/cv` : "",
    cv_file_name: row.cvFileName || "",
    status: row.status,
    applied_at: new Date(row.appliedAt),
    reviewed_at: row.reviewedAt ? new Date(row.reviewedAt) : undefined,
    notes: row.notes || "",
  };
}

export const createApplication = async (
  applicationData: Omit<Application, "id" | "applied_at" | "status">,
  cvFile: File,
): Promise<string> => {
  const formData = new FormData();
  formData.append("name", applicationData.name);
  formData.append("email", applicationData.email);
  formData.append("phone", applicationData.phone);
  formData.append("position", applicationData.position);
  formData.append("experience", applicationData.experience);
  formData.append("cover_letter", applicationData.cover_letter);
  formData.append("cv", cvFile);

  const { id } = await fetchJson<{ id: string }>("/api/applications", {
    method: "POST",
    body: formData,
  });
  return id;
};

export const getApplications = async (): Promise<Application[]> => {
  const rows = await fetchJson<ApiApplicationRow[]>("/api/admin/applications");
  return rows.map(mapApplication);
};

export const subscribeToApplications = (callback: (applications: Application[]) => void) => {
  getApplications().then(callback).catch(console.error);
  return () => {};
};

export const updateApplicationStatus = async (
  id: string,
  status: Application["status"],
  notes?: string,
) => {
  await fetchJson<ApiApplicationRow>("/api/admin/applications", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status, notes: notes || "" }),
  });
};

export const deleteApplication = async (id: string) => {
  await fetchJson<{ ok: boolean }>("/api/admin/applications", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
};

export const getApplicationsByStatus = async (
  status: Application["status"],
): Promise<Application[]> => {
  const apps = await getApplications();
  return apps.filter((app) => app.status === status);
};
