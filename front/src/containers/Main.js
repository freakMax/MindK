import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Main from '../components/Main/Main'
import Header from '../components/Header/Header'
import React, {useState} from 'react';
import Articles from '../components/Main/Articles/Articles'

function MainContainer() {

    const [element, setElement] = useState(<Articles />);
    const [data , setData] = useState({name:'User',surname:'Name'});


    const userData = {
        id: 1,
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 25,
        avatar: {
            fileId: 1,
            file: {
                id: 1,
                name: 'photo.jpg',
                path: '/upload/photo.jpg',
                size: 1234
            }
        },
        friends: [{}, {}, {}], //array of users
        articles: [{
            title: 'Article 1',
            text: 'Some text',
            images: [{}, {}, {}], // array of files
            createdAt: '2020-12-17 19:00:00',
            editedAt: '2020-12-17 20:00:00',
            likes: [
                {userId: 2, user: {id: 2}, date: '2020-12-17 21:00:00'},
                {userId: 3, user: {id: 3}, date: '2020-12-17 22:00:00'}
            ]
        }]
    };



    return (
        <> 
            <ErrorBoundary>
                <Header  data={data} setElement={setElement} setData={setData}/>
            </ErrorBoundary>
            <Main  element={element} userData={userData}/>
        </>
    );
}



export default MainContainer;