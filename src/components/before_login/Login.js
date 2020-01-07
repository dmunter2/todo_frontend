import React, {useState} from 'react';
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom'
import Style from 'styled-components';

const DIV = Style.div`
width: 400px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
height: 450px;
`
const FORM = Style.form`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 6%;
`

const INPUT = Style.input`
width: 320px;
padding: 3%;
margin-bottom: 6%;
border-radius: 10px;
border: 2px solid black;

`

const BUTTON  = Style.button`
width: 346px;
border: 1px solid grey;
padding: 2%;
border-radius: 10px;
border: 2px solid black;
background-color: black;
color: white;
margin-top: 10%;
margin-bottom: 10%;
font-size: 20px;

`

const LINKDIV = Style.div`
display:flex;
flex-direction: row;
justify-content: end;
width: 75%;
margin-left: 18%;

`

const H2 = Style.h1`
font-size: 20px;
margin-right: 4px;
`
const DIV4 = Style.div`
display: flex;
align-items: center;
`

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })





    const handleSubmit = e => {
        e.preventDefault();

            axiosWithAuth()
                .post('https://todoappp1.herokuapp.com/api/auth/login', credentials)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.user_id)
                window.location.href = `/home/homepage`
                // console.log(localStorage.getItem)
             
            })
    }


    const handleChanges = e => {
        return setCredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }



  




    return (
        <DIV>

            <FORM onSubmit={handleSubmit}>
                <INPUT className='login_input'
                name='username'
                placeholder='username'
                onChange={handleChanges}
                />


                <INPUT className='login_input'
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={handleChanges}
                />


                <BUTTON className='login_btn' type='submit'>Log in</BUTTON>
                
            
        </FORM>
            <LINKDIV>
                <H2>No account?</H2>
                <DIV4>
                    <Link className='link_signup' to='/signup'>Sign up</Link>
                </DIV4>
            </LINKDIV>

        </DIV>

    )



}


export default Login; 






// const handleSubmit = e => {


//     e.preventDefault();
//     // console.log(users)
//     Axios
//         .get('https://hidden-chamber-84113.herokuapp.com/api/v1/users')
//         .then(res => setAll(res.data))
//         .then(console.log(all))
//         .then(matchFunc(all))
//         .catch(err => console.log('error', err))

//     if (localStorage.getItem('token')) {
//         window.location.href = '/onlogin'
//     } else {
//         console.log('incorrect')
//     }

// }