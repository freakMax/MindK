import './Header.css'
import Logo from './Logo/Logo'
import Button from './Button/Button'
import User from './User/User'


function Header() {
    return (
        <div className="header">
            <Logo />
            <Button />
            <User />
            <div className='line'>
            </div>
        </div>
    );
}

export default Header;