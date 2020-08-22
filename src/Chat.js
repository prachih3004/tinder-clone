import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Chat.css'
import {Link} from "react-router-dom";
//import Avatar from 'react-avatar'

function Chat({name, message, time, profilePic}){
	return(
		<Link to={`/chat/${name}`}>
		<div className='chat'>
		<Avatar className='chat__image'  src={profilePic} >{name.substring(0,1)}</Avatar>
		<div className='chat__details'>
		<h2>{name}</h2>
		<p>{message}</p>
		</div>
		<div className='chat__time'><p>{time}</p></div>
		</div>
		</Link>
		);

}

export default Chat;