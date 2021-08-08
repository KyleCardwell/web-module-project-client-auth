import axios from 'axios';
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialForm = {
    name: '',
    age: '',
    email: '',
}

let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }

function AddFriend(props) {

    const { friends, setFriends } = props;
    const [newFriend, setNewFriend ] = useState(initialForm)

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        setFriends([
            ...friends,
            {...newFriend,
                id: s4()
            }
        ]);

        axiosWithAuth().post('/friends', friends)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
            
        setNewFriend(initialForm)
        console.log(friends)
        window.location.href = "/friends"
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={newFriend.name}
                        onChange={handleChange}
                    />
                </label>
                <label>Age:
                    <input
                        type="text"
                        name="age"
                        value={newFriend.age}
                        onChange={handleChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        name="email"
                        value={newFriend.email}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>

            </form>
        </div>

    )
}

export default AddFriend;