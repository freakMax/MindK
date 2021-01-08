import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Main from '../components/Main/Main'
import Header from '../components/Header/Header'
import React, {useState} from 'react';
import Articles from '../components/Main/Articles/Articles'

function MainContainer() {

    const [element, setElement] = useState(<Articles />);
    const [data , setData] = useState({name:'User',surname:'Name'});



    return (
        <> 
            <ErrorBoundary>
                <Header  data={data} setElement={setElement} setData={setData}/>
            </ErrorBoundary>
            <Main  element={element}/>
        </>
    );
}



export default MainContainer;