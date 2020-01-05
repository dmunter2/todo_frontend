import React from 'react';
import Style from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './logo.png'

// import AppRouter from '../AppRouter'


const DIV = Style.div`
width: 90%;

`
const DIV1 = Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;


@media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

`


const LOGODIV = Style.div`
width: 30%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding-bottom: 3%;
`

const LOGSIGN = Style.div`
width: 30%;

display: flex;
flex-direction: row;
align-items: center;
width: 20%;
justify-content: space-around;


@media (max-width: 500px) {
    // width: 200px;
    width: 100%;
}


`


const H1 = Style.h1`
font-family: 'Long Cang', cursive;
font-size: 4.9rem;
margin-top: 0;
margin-bottom: 0;
`



const IMG = Style.img`
height: 60px;
width: 65px;

`


const BeforeLogin = () => {


    return (

        <DIV>

            <DIV1>
                <LOGODIV>

                    <Link className='todo_logo' to='/'>
                        <IMG src={Logo}></IMG>
                    </Link>

                    <Link className='todo_logo' to='/'>
                        <H1>Todo</H1>
                    </Link>

                </LOGODIV>

                <LOGSIGN>
                        <Link className='link-home-page' to ='/login'>Login</Link>

                        <Link className='link-home-page' to ='/signup'>Signup</Link>
                </LOGSIGN>
            </DIV1>



        </DIV>
    )
}


export default BeforeLogin;