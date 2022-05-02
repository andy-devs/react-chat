import { useEffect, useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '../firebase';
import { db } from '../firebase';
import {
	doc,
	collection,
	query,
	orderBy,
	limit,
	onSnapshot,
	setDoc,
	addDoc,
} from 'firebase/firestore';
import SignOut from './SignOut';
import classes from './Chat.module.css';
import Messages from './Messages';
import NewMessage from './NewMessage';

const Chat = () => {
	const [messages, setMessages] = useState<any[]>([]);

	const fetchMessages = async () => {
		const messagesRef = collection(db, 'messages');
		const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(50));
		onSnapshot(messagesQuery, (snapshot) => {
			setMessages(snapshot.docs.map((doc) => doc.data()));
		});
	};

	const addMessageHandler = async (text: string) => {
		const messagesRef = collection(db, 'messages');
		await addDoc(messagesRef, {
			id: uuidv4(),
			text: text,
			user: auth.currentUser.displayName,
			createdAt: moment().format('YYYY-MM-DTh:mm:ss a'),
		});
	};

	useEffect(() => {
		fetchMessages();
	}, []);

	return (
		<main className={classes.main}>
			<div className={classes['main__content-wrapper']}>
				<div className={classes.main__content}>
					<SignOut />
					<Messages messages={messages} />
				</div>

				<NewMessage addMessage={addMessageHandler} />
			</div>
		</main>
	);
};
export default Chat;
