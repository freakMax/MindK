import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Main from '../components/Main/Main'
import Header from '../components/Header/Header'
import React, {useState} from 'react';

function MainContainer() {
    const [username , setUsername] = useState({name:'User',surname:'Name'});
    const [posts, setPosts] = useState([
        {
            title: 'Post 1',
            text: 'TEXT'
        },
        {
            title: 'Post 2',
            text: 'TEXT'
        },
        {
            title: 'Post 3',
            text: 'TEXT'
        }
    ])


    return (
        <> 
            <ErrorBoundary>
                <Header  username={username}/>
            </ErrorBoundary>
            <Main setUsername={setUsername} posts={posts} />
        </>
    );
}



export default MainContainer;