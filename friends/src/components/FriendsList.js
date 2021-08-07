import React, { useEffect, useState } from 'react';
import Friend from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth'

function FriendsList(props) {

    const { friends, setFriends } = props

    useEffect(() => {
        axiosWithAuth().get('/friends', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => {

                setFriends(res.data)
            })
            .catch(err => console.log(err.response.data.error))
    },[])


    return (
        <div>
            {friends.map(friend => {
                return (
                    <Friend
                        key={friend.id}
                        name={friend.name}
                        id={friend.id}/>
                )
            })}
        </div>
    )

}

export default FriendsList;