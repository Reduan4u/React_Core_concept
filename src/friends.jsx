import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './friend';
export default function Friends() {

    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h2>My Friends: {friends.length} </h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }

        </div>
    )
}


/* 
1. state to hold data
2. useEffect with dependency array
3. use fetch to load data
4. set loaded data to state
*/