import React from 'react';
import { useParams } from 'react-router-dom';

function FriendInfo(props) {

    let { id } = useParams();

    const showFriend = props.friends.find(friend => friend.id == id)

    return (
        <div>
            <h2>{showFriend.name}</h2>
            <h4>Age: {showFriend.age}</h4>
            <h4>Email: {showFriend.email}</h4>
        </div>
    )
}

export default FriendInfo;