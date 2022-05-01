import { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
	collection,
	getDocs,
	query,
	orderBy,
	limit,
	onSnapshot,
} from 'firebase/firestore';
import SignOut from './SignOut';
import classes from './Chat.module.css';

const Chat = () => {
	const [messages, setMessages] = useState<any[]>([]);

	const fetchMessages = async () => {
		const messagesRef = collection(db, 'messages');
		const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(50));
		onSnapshot(messagesQuery, (snapshot) => {
			setMessages(snapshot.docs.map((doc) => doc.data()));
		});
	};

	fetchMessages();

	return (
		<main className={classes.chat}>
			<h1>Chat</h1>
			<ul>
				{messages.map((message: any) => (
					<li>
						{message.author} - {message.text}
					</li>
				))}
			</ul>
			<SignOut />
		</main>
	);
};
export default Chat;
