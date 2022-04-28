import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

const SignIn = () => {
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	};

	return (
		<div>
			<button onClick={signInWithGoogle}>Sign In with Google</button>
		</div>
	);
};

export default SignIn;
