import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'



function ChatScreen(){
	const[input, setInput]=useState();

	const[messages, setMessages] = useState([
	{
		name:'Dory',
		image:'https://i.pinimg.com/originals/dc/97/53/dc9753569ed7db3b1954d09d59de2908.jpg',
		message:'I shall call you squishy'
	},
	{
		name:'Dory',
		image:'https://i.pinimg.com/originals/dc/97/53/dc9753569ed7db3b1954d09d59de2908.jpg',
		message:'My little squishy'
	},
	{
		name:'Dory',
		image:'https://i.pinimg.com/originals/dc/97/53/dc9753569ed7db3b1954d09d59de2908.jpg',
		message:'So when are we meeting squishy'
	},
	{
		message:'We are not'
	},
	{
		name:'Dory',
		image:'https://i.pinimg.com/originals/dc/97/53/dc9753569ed7db3b1954d09d59de2908.jpg',
		message:'Bad squishy'
	}
	])

	const handleSend = e => {
		e.preventDefault();

		setMessages([...messages, { message : input}]);
		setInput("");
	}
	return(
		<div className='chatScreen'>
			<p className='chatScreen__timestamp'>YOU MATCHED WITH DORY ON 01/12/2019</p>
		
			{messages.map(
				(message) => 
				(
					message.name ? 
					(
					<div className='chatScreen__message'>
						<Avatar 
							className='chatScreen__image' 
							alt={message.name} 
							src={message.image} 
						/>
						<p className='chatScreen__text'>{message.message}</p> 
					</div>
					):
					(
						<div className='chatScreen__message'>
							<p className='chatScreen__userMsg'>{message.message}</p>
						</div>
					)
			
				)
			)}

			
				<form className='chatScreen__input'>
					<input value={input} onChange= {(e) => setInput(e.target.value)} className='chatScreen__inputField' placeHolder='Type a message...' type="text" />
					<button className="chatScreen__inputButton" onClick={handleSend}>SEND </button>
				</form>
			
		
		</div>
		)
}

export default ChatScreen;