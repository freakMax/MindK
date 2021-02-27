import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Main from '../components/Main/Main'
import Header from '../components/Header/Header'
import React, {useState} from 'react';

function MainContainer() {
    const [username , setUsername] = useState({name:'User',surname:'Name'});

    return (
        <> 
            <ErrorBoundary>
                <Header  username={username}/>
            </ErrorBoundary>
            <Main setUsername={setUsername} />
        </>
    );
}



export default MainContainer;