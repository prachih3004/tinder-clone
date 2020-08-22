import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import database from './firebase'


function TinderCards() {

	const[people, setPeople]=useState([])
	/*const[people, setPeople]=useState([
	{
		name:'Winnie the Pooh',
		url:'https://cdn.shopify.com/s/files/1/0059/5974/5634/products/Winnie_The_Pooh_Diamond_Painting_530x@2x.jpg?v=1555569672'
	},
	{
		name:'Lola',
		url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42f996ee-b2c9-460d-8166-3afe4710651c/dbht20-f7fdad68-5b35-45fe-86f5-2bf43bf5d8bc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDJmOTk2ZWUtYjJjOS00NjBkLTgxNjYtM2FmZTQ3MTA2NTFjXC9kYmh0MjAtZjdmZGFkNjgtNWIzNS00NWZlLTg2ZjUtMmJmNDNiZjVkOGJjLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.W-HKaAca9iB5CpEKFVMa_RAyCZxMUQVcdlJ67eK6q_I'
	}



		]);*/


	//useEffect piece of code that runs based on a condition
	useEffect(()=> {
		//runs once and never again when the component loads
		const unsubscribe = database
		.collection('people')
		.onSnapshot(snapshot => 
		setPeople(snapshot.docs.map(doc => doc.data())
			));
		return() => {

			//this is for cleanup
			unsubscribe();
		};
			
	}, [])

	
	
	//how it is pushed normally (Bad)
	//const people=[]
	//people.push('Prachi','Arvi')

	//how it is pushed in react (Good)
	//setPeople([...people,'Prachi','Arvi'])
  return (
  	<div>
 
  	<div className='card_container'>
  	{people.map((person) => (
  	<TinderCard
  	className='swipe'
  	key={person.name}
  	preventSwipe={['up','down']}>
  	<div style={{backgroundImage:`url(${person.url})`, backgroundSize: 'cover'} } className='card'>
  	<h3>{person.name}</h3>
  	</div>
  	</TinderCard>
  	) )}
  	</div>
  	</div>
  	);
}

export default TinderCards;
