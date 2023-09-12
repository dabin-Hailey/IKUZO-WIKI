import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  Firestore,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

export const getData = async (
  db: Firestore,
  collectionName: string,
): Promise<void> => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
    console.log(doc.id, ' => ', doc.data());
  });
};

export const setData = async (
  db: Firestore,
  collectionName: string,
  inputTitle: string,
): Promise<void> => {
  const date = new Date();
  const dataId = `${collectionName}-${date.getTime()}`;

  await setDoc(doc(db, collectionName, dataId), {
    title: inputTitle,
  });
};

export const updateData = async (
  db: Firestore,
  collectionName: string,
  dataId: string,
  inputTitle: string,
): Promise<void> => {
  await setDoc(doc(db, collectionName, dataId), {
    title: inputTitle,
  });
};

export const deleteData = async (
  db: Firestore,
  collectionName: string,
  dataId: string,
): Promise<void> => {
  await deleteDoc(doc(db, collectionName, dataId));
};
