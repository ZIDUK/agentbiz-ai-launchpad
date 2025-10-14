import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  where,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase';

export interface Application {
  id?: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
  cvUrl: string;
  cvFileName: string;
  status: 'pending' | 'reviewed' | 'interviewed' | 'accepted' | 'rejected';
  appliedAt: Date;
  reviewedAt?: Date;
  notes?: string;
}

// Subir CV a Firebase Storage
export const uploadCV = async (file: File, applicationId: string): Promise<string> => {
  try {
    const fileName = `${applicationId}_${file.name}`;
    const storageRef = ref(storage, `cvs/${fileName}`);
    
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error al subir CV:', error);
    throw error;
  }
};

// Crear nueva aplicación
export const createApplication = async (applicationData: Omit<Application, 'id' | 'appliedAt' | 'status'>, cvFile: File): Promise<string> => {
  try {
    // Crear documento en Firestore
    const docRef = await addDoc(collection(db, 'applications'), {
      ...applicationData,
      status: 'pending',
      appliedAt: new Date()
    });

    // Subir CV
    const cvUrl = await uploadCV(cvFile, docRef.id);
    
    // Actualizar con la URL del CV
    await updateDoc(docRef, {
      cvUrl,
      cvFileName: cvFile.name
    });

    return docRef.id;
  } catch (error) {
    console.error('Error al crear aplicación:', error);
    throw error;
  }
};

// Obtener todas las aplicaciones
export const getApplications = async (): Promise<Application[]> => {
  try {
    const q = query(collection(db, 'applications'), orderBy('appliedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      appliedAt: doc.data().appliedAt?.toDate() || new Date(),
      reviewedAt: doc.data().reviewedAt?.toDate()
    })) as Application[];
  } catch (error) {
    console.error('Error al obtener aplicaciones:', error);
    throw error;
  }
};

// Obtener aplicaciones en tiempo real
export const subscribeToApplications = (callback: (applications: Application[]) => void) => {
  const q = query(collection(db, 'applications'), orderBy('appliedAt', 'desc'));
  
  return onSnapshot(q, (querySnapshot) => {
    const applications = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      appliedAt: doc.data().appliedAt?.toDate() || new Date(),
      reviewedAt: doc.data().reviewedAt?.toDate()
    })) as Application[];
    
    callback(applications);
  });
};

// Actualizar estado de aplicación
export const updateApplicationStatus = async (id: string, status: Application['status'], notes?: string) => {
  try {
    const applicationRef = doc(db, 'applications', id);
    await updateDoc(applicationRef, {
      status,
      reviewedAt: new Date(),
      notes: notes || ''
    });
  } catch (error) {
    console.error('Error al actualizar aplicación:', error);
    throw error;
  }
};

// Eliminar aplicación
export const deleteApplication = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'applications', id));
  } catch (error) {
    console.error('Error al eliminar aplicación:', error);
    throw error;
  }
};

// Obtener aplicaciones por estado
export const getApplicationsByStatus = async (status: Application['status']): Promise<Application[]> => {
  try {
    const q = query(
      collection(db, 'applications'), 
      where('status', '==', status),
      orderBy('appliedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      appliedAt: doc.data().appliedAt?.toDate() || new Date(),
      reviewedAt: doc.data().reviewedAt?.toDate()
    })) as Application[];
  } catch (error) {
    console.error('Error al obtener aplicaciones por estado:', error);
    throw error;
  }
};