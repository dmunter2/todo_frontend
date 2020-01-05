import React from 'react';
import Style from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './logo.png'

// import AppRouter from '../AppRouter'


const DIV = Style.div`

`
const DIV1 = Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`


const LOGODIV = Style.div`
width: 30%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding-bottom: 3%;
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


const AfterLogin = () => {


    return (

        <DIV>

            <DIV1>
                <LOGODIV>

                    <Link className='todo_logo' to='/home/homepage'>
                        <IMG src={Logo}></IMG>
                    </Link>

                    <Link className='todo_logo' to='/home/homepage'>
                        <H1>Todo</H1>
                    </Link>

                </LOGODIV>
            </DIV1>



        </DIV>
    )
}


export default AfterLogin;