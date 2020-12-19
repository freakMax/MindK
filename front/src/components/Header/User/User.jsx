import './User.css'
import React, {useState} from 'react';
import img_logo from './kurt-cobain.jpg'

function User(props) {
    return (
        <div className='user'>
            <img src={img_logo} alt="Logo" className="logo-img"/>
            <span className='user-text'>{props.name} {props.surname}</span>
            <div className='menu-block'>
                <ul className='menu-ul'>
                    <li className='menu__text'  onClick={props.onClick}>Profile</li>
                    <li className='menu__text'>Log Out</li>
                </ul>
            </div>
        </div>
    );
}

export default User;