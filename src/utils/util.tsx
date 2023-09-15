import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  increment,
  onSnapshot,
  QuerySnapshot,
  orderBy,
} from 'firebase/firestore';
import { db } from './firebase.config';

interface Notice {
  id: string;
  html?: string;
  markdown?: string;
  title?: string;
  location?: string;
  people?: number;
  time?: number;
}

export const getData = async (collectionName: string): Promise<Notice[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const docs = querySnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return docs;
};

export const getDataByField = async (
  collectionName: string,
  fieldName: string,
  fieldValue: string,
) => {
  const q = query(
    collection(db, collectionName),
    where(fieldName, '==', fieldValue),
  );
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
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

export const updateDataByField = async (
  collectionName: string,
  dataId: string,
  fieldName: string,
  fieldValue: string | number | boolean,
): Promise<void> => {
  const dataRef = doc(db, collectionName, dataId);
  await updateDoc(dataRef, {
    [fieldName]: fieldValue,
  });
};

export const updateDataByNumber = async (
  collectionName: string,
  dataId: string,
  fieldName: string,
): Promise<void> => {
  const dataRef = doc(db, collectionName, dataId);
  await updateDoc(dataRef, {
    [fieldName]: increment(1),
  });
};

export const getDataBySnapshot = (
  collectionName: string,
  callback: (data: any) => void,
) => {
  onSnapshot(collection(db, collectionName), (querySnapshot: QuerySnapshot) => {
    const docs = querySnapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id };
    });
    callback(docs);
  });
};

export const getDataByTimestamp = async (
  collectionName: string,
  fieldName: string,
) => {
  const staleTime = Math.floor(new Date().getTime() / 1000) - 60;
  const q = query(
    collection(db, collectionName),
    where(fieldName, '>', staleTime),
    orderBy(fieldName, 'asc'),
  );
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
  return docs;
};
