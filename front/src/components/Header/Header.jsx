import './Header.css'
import Logo from './Logo/Logo'
import Button from './Button/Button'
import User from './User/User'


function Header(props) {
    return (
        <div className="header">
            <Logo onClick={props.logoHandler}/>
            <Button onClick={props.buttonHandler}/>
            <User onClick={props.profileHandler} name={props.name} surname={props.surname}/>
            <div className='line'>
            </div>
        </div>
    );
}

export default Header;