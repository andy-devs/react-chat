import { auth } from '../firebase';
import classes from './SignOut.module.css';

const SignOut = () => {
	const signOutHandler = () => {
		auth.signOut();
	};

	return (
		<button className={classes.signOut} onClick={signOutHandler}>
			Sign Out
		</button>
	);
};

export default SignOut;
