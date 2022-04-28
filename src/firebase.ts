import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCjdurPaipL0EG7Dh-14T_epIvCyrDu9lc',
	authDomain: 'react-chat-2cc6e.firebaseapp.com',
	databaseURL:
		'https://react-chat-2cc6e-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'react-chat-2cc6e',
	storageBucket: 'react-chat-2cc6e.appspot.com',
	messagingSenderId: '513738534546',
	appId: '1:513738534546:web:144d7bf5fdbc5a8236c04b',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { db, auth };
