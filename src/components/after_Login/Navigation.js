import React from 'react'
import {Link} from 'react-router-dom'
import Style from 'styled-components';
import Logout from './Logout';



const DIV = Style.div`
display: flex;
align-items: center;
width: 400px;
margin: 0 2% 0 2%;
justify-content: space-between;


@media (max-width: 500px) {
  margin: 0;
  width: 350px;
  margin-bottom: 70px;
}




`



const Navigation = () => {

    return (
        <DIV>
            <Link className='after-login-menu' to='/home/homepage'>Home</Link>
            <Link className='after-login-menu'to='/home/addtodo'>Add Todo</Link>
            <Link className='after-login-menu' to='/home/completed'>Completed</Link>
            <Logout />

        </DIV>
    )
}

export default Navigation;

