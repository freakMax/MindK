import './Authorization.css'
import {Switch,Route,Link} from 'react-router-dom'
import Registration from './Registration/Registration'
import Login from './Login/Login'

function Authorization() {
    return (
        <>
        <div className="header">
            <Link to='/posts' className='logo-text'>Youngsters</Link>
            <Link to='/auth/reg' className='logo-text'>Registration</Link>
            <Link to='/auth/log' className='logo-text'>Log In</Link>
        </div>
        <Switch>
            <Route path='/auth/reg' component={Registration}/>
            <Route path='/auth/log' component={Login}/>
        </Switch>
        </>
    )
}

export default Authorization;