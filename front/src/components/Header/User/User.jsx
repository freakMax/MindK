import PropTypes from 'prop-types';
import './User.css'
import React from 'react';
import img_logo from './kurt-cobain.jpg'
import {Link} from 'react-router-dom'
import { useQuery } from 'react-query'
import { getUserImage } from '../../../Requests/requests'


function User({username}) {
    const id = 5
    const { data: response } = useQuery('image', () => getUserImage({ id }))
    const image = response?.data || false
    console.log(image)
    return (
        <div className='user'>
            {image && <img src={`/uploads/${image}`} alt='user img' className='logo-img'/>}
            {!image && <img src={img_logo} alt='user img' className='logo-img'/>}
            <Link to='/profile'><span className='user-text'>{username.name} {username.surname}</span></Link>
        </div>
    );
}

User.propTypes = {
    username: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname:PropTypes.string.isRequired
    })
}

export default User;