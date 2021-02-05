import PropTypes from 'prop-types';
import Articles from './Articles/Articles';
import AddArticles from './AddArticles/AddArticles';
import Profile from './Profile/Profile';
import {Switch,Route,Redirect} from 'react-router-dom'


function Main({setUsername,posts,setPosts}) {

    return (
        <Switch>
            <Route exact path="/posts" >
                <Articles posts={posts}/>
            </Route>
            <Route exact path="/addArticles">
                <AddArticles setPosts={setPosts} posts={posts}/>
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
    posts: PropTypes.array.isRequired,
    setPosts: PropTypes.func.isRequired
}


export default Main;