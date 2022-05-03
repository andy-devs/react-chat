import { useState } from 'react';
import classes from './NewMessage.module.css';
import { auth } from '../firebase';

const NewMessage = ({ addMessage }) => {
	const [text, setText] = useState('');

	const textChangeHandler = (e: any) => {
		setText(e.target.value);
	};

	const submitHandler = async (e: any) => {
		e.preventDefault();
		if (!auth.currentUser.emailVerified) {
			alert('Please verify you email!');
			return;
		}
		addMessage(text);
		window.scrollTo(0, document.body.scrollHeight);
		setText('');
	};

	return (
		<form autoComplete='off' className={classes.form} onSubmit={submitHandler}>
			<input
				className={classes.form__input}
				type='text'
				placeholder='new message...'
				name='text'
				id='text'
				value={text}
				onChange={textChangeHandler}
			/>
			<button className={classes.form__btn}>Send</button>
		</form>
	);
};

export default NewMessage;
