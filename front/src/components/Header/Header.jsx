import './Header.css'
import Logo from './Logo/Logo'
import Button from './Button/Button'
import User from './User/User'
import Articles from '../Main/Articles/Articles'
import AddArticles from '../Main/AddArticles/AddArticles'
import Profile from '../Main/Profile/Profile'


function Header({data,setElement,setData}) {
    const logoHandler = () => setElement(<Articles/>)
    const buttonHandler = () => setElement(<AddArticles/>)
    const userHandler = () => setElement(<Profile setData={setData}/>)

    return (
        <div className="header">
            <Logo onClick={logoHandler}/>
            <Button onClick={buttonHandler}/>
            <User userHandler={userHandler} data={data} />
            <div className='line'>
            </div>
        </div>
    );
}

export default Header;