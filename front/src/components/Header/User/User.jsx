import PropTypes from 'prop-types';
import './User.css'
import React from 'react';
import img_logo from './kurt-cobain.jpg'
import {Link} from 'react-router-dom'

function User({username}) {
    return (
        <div className='user'>
            <img src={img_logo} alt="Logo" className="logo-img"/>
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