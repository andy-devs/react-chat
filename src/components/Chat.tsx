import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import SignOut from './SignOut';

const Chat = () => {
	const [messages, setMessages] = useState();
	useEffect(() => {
		const messagesCollection = collection(db, 'messages');
		const fetched = doc(messagesCollection);
		console.log(messagesCollection);
	});

	return (
		<div>
			<h1>Chat</h1>
			<SignOut />
		</div>
	);
};
export default Chat;
