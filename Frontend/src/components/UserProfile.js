import React, { useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import {useState} from 'react';

function UserProfile() {
    const [user, setUser] = useState({});
    const history = useHistory();
    const token = localStorage.getItem('token');
    if(!token) history.push('/login');

    useEffect( () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('user_id');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        console.log(token, userId)
        axios.get(`http://localhost:5000/api/users/${userId}`,config)
        .then(res => {
            console.log(res.data)
            setUser(res.data.user)
            console.log(user.firstName)
        })
        .catch(err => {
            console.log(err);
        })
    }, [user])

    return (
        <div className="UserProfile">
            <p><b>FirstName: </b>{user.firstName}</p>
            <p><b>LastName: </b>{user.lastName}</p>
            <p><b>Email: </b>{user.email}</p>
            <p><b>Phone Number: </b>{user.phoneNumber}</p>
            <p><b>Address: </b>{user.address}</p>
        </div>
    )
}

export default UserProfile
