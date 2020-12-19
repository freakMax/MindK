import Main from '../components/Main/Main'
import Header from '../components/Header/Header'
import React, {useState} from 'react';

function MainContainer() {
    const [logo, setLogo] = useState(true);
    const [button, setButton] = useState(false);
    const [profile, setProfile] = useState(false);

const logoHandler = () =>{
    setLogo(true);
    setButton(false);
    setProfile(false);
}

const buttonHandler = () => {
    setLogo(false);
    setButton(true);
    setProfile(false);
}

const profileHandler = () => {
    setLogo(false);
    setButton(false);
    setProfile(true);
}


const [name , setName] = useState('User');
const [surname , setSurname] = useState('Name');

const updateData = (name,surname) =>{
    setName(name)
    setSurname(surname)
}

return (
    <> 
        <Header logoHandler={logoHandler} buttonHandler={buttonHandler} profileHandler={profileHandler} name={name} surname={surname}/>
        <Main logo={logo} button={button} profile={profile} updateData={updateData}/>
    </>
);
}



export default MainContainer;