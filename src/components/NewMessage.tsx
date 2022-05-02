import { useState } from 'react';
import classes from './NewMessage.module.css';

const NewMessage = ({ addMessage }) => {
	const [text, setText] = useState('');

	const textChangeHandler = (e: any) => {
		setText(e.target.value);
	};

	const submitHandler = async (e: any) => {
		e.preventDefault();
		addMessage(text);
		setText('');
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
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
