import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

    return (
        <div>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link onClick={props.logout}>Logout</Link>
              </li>
              <li>
                <Link to='/addFriend'>Add Friend</Link>
              </li>
            </ul>
          </div>
    )
}

export default NavBar;