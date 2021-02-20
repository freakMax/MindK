import PropTypes from 'prop-types';
import AddArticles from './AddArticles/AddArticles';
import Profile from './Profile/Profile';
import PostList from '../../containers/PostList'
import {Switch,Route,Redirect} from 'react-router-dom'


function Main({setUsername}) {
    return (
        <Switch>
            <Route exact path="/" >
                <PostList />
            </Route>
            <Route exact path="/addArticles">
                <AddArticles />
            </Route>
            <Route exact path="/profile"> 
                <Profile setData={setUsername} />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}


Main.propTypes = {
    setUsername: PropTypes.func.isRequired,
}


export default Main;