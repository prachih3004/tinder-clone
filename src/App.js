import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TinderCards from './TinderCards'
import Header from './Header'
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'

import ChatScreen from './ChatScreen'
import './App.css'

function App() {
  return (
    <div className="App">
     {/* <h2>Tinder Clone</h2>*/}
   
     <Router>

      <Switch>

      <Route path="/chat/:person">
      <Header backButton="/chat" />
      <ChatScreen />
      </Route>
      <Route path="/chat">
      <Header backButton="/" />
      <Chats />
      </Route>
      <Route path="/">
      <Header />
      <TinderCards />
      <SwipeButtons />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
