import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import FriendsList from './components/FriendsList';
import { axiosWithAuth } from './utils/axiosWithAuth';
import axios from 'axios';
import FriendInfo from './components/FriendInfo';
import React, { useState } from 'react'
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';


function App() {

  const [ friends, setFriends ] = useState([])

  const logout = () => {

    localStorage.removeItem('token')
    window.location.href = '/login'
    
}

  return (
    <div className="App">
      <header className="App-header">
        <Router>

          <NavBar logout={logout}/>

          <Switch>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute exact path="/friends"
              component={() => <FriendsList friends={friends} setFriends={setFriends}/>}
            />    

            <PrivateRoute exact path="/addFriend"
              component={() => <AddFriend friends={friends} setFriends={setFriends}/>}
            />       
            
            <Route path='/friends/:id' children={<FriendInfo friends={friends}/>} />

          </Switch>
          

        </Router>

      </header>
    </div>
  );
}

export default App;
