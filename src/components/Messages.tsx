import Message from './Message';
import classes from './Messages.module.css';

const Messages = ({ messages }) => {
	return (
		<div className={classes.messages}>
			<div className={classes.messages__top}></div>
			{messages.map((message) => (
				<Message
					key={message.id}
					text={message.text}
					user={message.user}
					createdAt={message.createdAt}
				/>
			))}
			<div className={classes.messages__bottom}></div>
		</div>
	);
};

export default Messages;
