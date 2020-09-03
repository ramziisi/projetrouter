import React from 'react';
import {Link} from 'react-router-dom';


export const Nav = () => {
  

    return (
        <nav>
           <Link  className='logo' to='/'>Home</Link> 
<div className='links'>
    <Link to='/Apropos'>A propos</Link>
    <Link to='/Blog'>Blog</Link>
    <Link to='/Loding'>Loding</Link>
</div>


        </nav>
    )
}
export default Nav

