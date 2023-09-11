import Wikis from '../components/wiki';
import { db } from '../utils/firebase.config';
import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	setDoc,
} from 'firebase/firestore';

const getData = async () => {
	const querySnapshot = await getDocs(collection(db, 'with-collection'));
	querySnapshot.forEach((doc) => {
		console.log(doc.id, ' => ', doc.data());
	});
};

const setData = async () => {
	const date = new Date();
	const dataId = 'with' + date.getTime();

	await setDoc(doc(db, 'with-collection', dataId), {
		title: 'hello' + dataId,
	});
};

const updateData = async (dataId: string) => {
	const docRef = doc(db, 'with-collection', dataId);

	await setDoc(docRef, {
		title: 'hello' + dataId,
	});
};

const deleteData = async (dataId: string) => {
	const docRef = doc(db, 'with-collection', dataId);
	await deleteDoc(docRef);
};

const Wiki = () => {
	getData();
	setData();
	updateData('with202309114875');
	// deleteData('with202309114875');
	return <Wikis />;
};

export default Wiki;
