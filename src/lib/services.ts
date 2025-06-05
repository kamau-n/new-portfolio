import { db, storage } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { Project, Skill } from "@/utils/types";

// Projects
export const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, "projects"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Project[];
};

export const addProject = async (project: Omit<Project, "id">) => {
  return await addDoc(collection(db, "projects"), project);
};

export const updateProject = async (id: string, project: Partial<Project>) => {
  const projectRef = doc(db, "projects", id);
  await updateDoc(projectRef, project);
};

export const deleteProject = async (id: string) => {
  const projectRef = doc(db, "projects", id);
  await deleteDoc(projectRef);
};

// Skills
export const getSkills = async () => {
  const querySnapshot = await getDocs(collection(db, "skills"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Skill[];
};

export const addSkill = async (skill: Omit<Skill, "id">) => {
  return await addDoc(collection(db, "skills"), skill);
};

export const updateSkill = async (id: string, skill: Partial<Skill>) => {
  const skillRef = doc(db, "skills", id);
  await updateDoc(skillRef, skill);
};

export const deleteSkill = async (id: string) => {
  const skillRef = doc(db, "skills", id);
  await deleteDoc(skillRef);
};

// Resume
export const uploadResume = async (file: File) => {
  const storageRef = ref(storage, "resume/" + file.name);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

export const deleteResume = async (fileName: string) => {
  const storageRef = ref(storage, "resume/" + fileName);
  await deleteObject(storageRef);
};
