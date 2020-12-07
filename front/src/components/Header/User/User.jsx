import './User.css'
import img_logo from './kurt-cobain.jpg'

function User() {
    return (
        <div className='user'>
            <img src={img_logo} alt="Logo" className="logo-img"/>
            <span className='user-text'>Kurt Cobain</span>
            <div className='menu-block'>
                <ul className='menu-ul'>
                    <li className='menu__text'>Profile</li>
                    <li className='menu__text'>Log Out</li>
                </ul>
            </div>
        </div>
    );
}

export default User;