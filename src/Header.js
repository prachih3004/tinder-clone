import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useHistory
} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import './Header.css'

function Header({backButton}) {
	const history= useHistory();
	return(
		<div className="Header">
		{backButton ? 
			(<IconButton onClick={() => history.replace(backButton)}>
				<ArrowBackIosIcon className="header__icon" fontSize="large" />
				</IconButton>):
			(<IconButton>
		<PersonIcon className="header__icon" fontSize="large" />
		</IconButton>)}
		
		<Link to='/'>
		<img className="header__logo" src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png' alt="tinder-logo" />
		</Link>
		<Link to='/chat'>
		<IconButton>
		<ForumIcon className="header__icon" fontSize="large" />
		</IconButton>
		</Link>
		</div>

	);
}

export default Header;