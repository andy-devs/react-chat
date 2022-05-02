import Message from './Message';
import classes from './Messages.module.css';

const Messages = ({ messages }) => {
	return (
		<div className={classes.messages}>
			{messages.map((message) => (
				<Message
					key={message.id}
					text={message.text}
					user={message.user}
					createdAt={message.createdAt}
				/>
			))}
		</div>
	);
};

export default Messages;
