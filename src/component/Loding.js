import React from 'react';
import {Redirect } from 'react-router-dom';

export const Loding = () => {
    return (
        <div>
           <p> Nous pouvons rediriger en utilisant le composant  en passant simplement la route vers laquelle nous voulons rediriger et en rendant le composant. Il est déjà chargé dans la bibliothèque react-router-dom. </p> 
           <button>login</button>
           <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        </div>
    )
}
export default Loding