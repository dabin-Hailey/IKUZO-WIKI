import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { db } from './firebase.config';

export const getData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const docs = querySnapshot.docs.map(doc => {return {
    ...doc.data(),
    id: doc.id,
  }});
  return docs;
};

export const setData = async (
  collectionName: string,
  props: any,
): Promise<void> => {
  const date = new Date();
  const dataId = `${collectionName}-${date.getTime()}`;

  await setDoc(doc(db, collectionName, dataId), props);
};

export const updateData = async (
  collectionName: string,
  dataId: string,
  props: any,
): Promise<void> => {
  await setDoc(doc(db, collectionName, dataId), props);
};

export const deleteData = async (
  collectionName: string,
  dataId: string,
): Promise<void> => {
  await deleteDoc(doc(db, collectionName, dataId));
};
