import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import React, { useState, useRef } from 'react';
import classes from './SignUpForm.module.css';

interface Props {
	type: boolean;
	changeSignUp: () => void;
}

const SignIn = (props: Props) => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const [email, setEmail] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [emailError, setEmailError] = useState('');
	const [isEmailTouched, setIsEmailTouched] = useState(false);
	const [password, setPassword] = useState('');
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	const [passwordError, setPasswordError] = useState('');
	const [isPasswordTouched, setIsPasswordTouched] = useState(false);

	const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const checkEmailValidity = () => {
		if (email === '') {
			setIsEmailValid(false);
			setEmailError('Email is required');
		} else if (!email.includes('@')) {
			setIsEmailValid(false);
			setEmailError('Email is not valid');
		} else {
			setIsEmailValid(true);
			setEmailError('');
		}
	};

	const checkPasswordValidity = () => {
		if (password === '') {
			setIsPasswordValid(false);
			setPasswordError('Password is required');
		} else if (password.length <= 6) {
			setIsPasswordValid(false);
			setPasswordError('Password has to be at least 6 characters');
		} else if (!password.match(/\d+/)) {
			setIsPasswordValid(false);
			setPasswordError('Password has to contain at least 1 number');
		} else {
			setIsPasswordValid(true);
			setPasswordError('');
		}
	};

	const emailBlurHandler = () => {
		setIsEmailTouched(true);
		checkEmailValidity();
	};

	const passwordBlurHandler = () => {
		setIsPasswordTouched(true);
		checkPasswordValidity();
	};

	const signInHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsEmailTouched(true);
		setIsPasswordTouched(true);
		checkEmailValidity();
		checkPasswordValidity();

		if (!isEmailValid || !isPasswordValid) {
			return;
		}
		if (props.type) {
			createUserWithEmailAndPassword(auth, email, password);
		} else if (!props.type) {
			signInWithEmailAndPassword(auth, email, password);
		}
	};

	let emailClasses;
	let passwordClasses;

	if (isEmailValid || !isEmailTouched) {
		emailClasses = classes['form__input'];
	} else {
		emailClasses =
			classes['form__input'] + ' ' + classes['form__input--invalid'];
	}
	if (isPasswordValid || !isPasswordTouched) {
		passwordClasses = classes['form__input'];
	} else {
		passwordClasses =
			classes['form__input'] + ' ' + classes['form__input--invalid'];
	}

	return (
		<div className={classes['form__wrapper']}>
			<form
				className={classes.form}
				action='/'
				method='post'
				onSubmit={signInHandler}>
				<h1 className={classes['form__title']}>React Chat 🚀</h1>
				<input
					ref={emailRef}
					className={emailClasses}
					type='email'
					placeholder='Your Email'
					id='email'
					name='email'
					value={email}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				<p
					className={
						isEmailValid
							? classes['form__input-error']
							: classes['form__input-error'] +
							  ' ' +
							  classes['form__input-error--active']
					}>
					{emailError}
				</p>
				<input
					ref={passwordRef}
					className={passwordClasses}
					type='password'
					placeholder='Your Password'
					id='password'
					name='password'
					value={password}
					onChange={passwordChangeHandler}
					onBlur={passwordBlurHandler}
				/>
				<p
					className={
						isPasswordValid
							? classes['form__input-error']
							: classes['form__input-error'] +
							  ' ' +
							  classes['form__input-error--active']
					}>
					{passwordError}
				</p>
				<button className={classes['form__button-submit']} type='submit'>
					{props.type ? 'Sign Up' : 'Log In'}
				</button>
				<button
					className={classes['form__button-link']}
					type='button'
					onClick={props.changeSignUp}>
					{!props.type ? 'Sign Up' : 'Log In'}
				</button>
			</form>
		</div>
	);
};

export default SignIn;
