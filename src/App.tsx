import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { useState } from 'react';
import SignUpForm from './components/SignUpForm';

function App() {
	const [user] = useAuthState(auth);
	const [isSignUp, setIsSignUp] = useState(true);
	const changeSignUpHandler = () => {
		setIsSignUp((prev) => !prev);
	};

	return (
		<>
			{user ? (
				<Chat />
			) : (
				<SignUpForm isSignUp={isSignUp} changeSignUp={changeSignUpHandler} />
			)}
		</>
	);
}

export default App;
