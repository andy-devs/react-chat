import { auth } from '../firebase';

const SignOut = () => {
	const signOutHandler = () => {
		auth.signOut();
	};

	return <button onClick={signOutHandler}>Sign Out</button>;
};

export default SignOut;
