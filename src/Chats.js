import React from 'react'
import Chat from './Chat'
function Chats(){
	return(
		<div className='chats'> 
		<Chat 
		name="Tinderella"
		message='See you at midnight.'
		time='10 seconds ago'
		profilePic='https://vignette.wikia.nocookie.net/princessdisney/images/e/ef/Cinderella.JPG/revision/latest/top-crop/width/360/height/450?cb=20130427060830'
		/>
		<Chat 
		name="Eeyore"
		message='I am looking for sunshine'
		time='2 minutes ago' 
		profilePic="https://i.pinimg.com/originals/c2/2a/52/c22a523af042b522b84db8ece35e08a6.jpg"
		/>
		<Chat 
		name="Genie"
		message='I am getting kind of fond of you.'
		time='30 minutes ago' 
		profilePic="https://i.pinimg.com/originals/ff/e5/fd/ffe5fdbd11bad1e4e03611418a6a1c69.png"
		/>
		<Chat 
		name="Dory"
		message='I shall call you Squishy'
		time='2 days ago' 
		profilePic="https://i.pinimg.com/originals/dc/97/53/dc9753569ed7db3b1954d09d59de2908.jpg"
		/>
		
		
		
		</div>
		);
}

export default Chats;