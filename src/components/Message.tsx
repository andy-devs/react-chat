import moment from 'moment';
import classes from './Message.module.css';
import { auth } from '../firebase';

const Message = ({ text, user, createdAt }) => {
	let messageClasses =
		auth.currentUser.displayName === user
			? classes.message + ' ' + classes.message__current
			: classes.message;

	return (
		<div className={messageClasses}>
			<p className={classes.message__text}>{text}</p>
			<p className={classes.message__user}>{user}</p>
			{/* <p className={classes.message__data}>
				{moment(createdAt, 'YYYY-MM-DTh:mm:ss a').fromNow()}
			</p> */}
		</div>
	);
};

export default Message;
