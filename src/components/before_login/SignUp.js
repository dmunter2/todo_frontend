import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Style from 'styled-components'
import {Link} from 'react-router-dom'






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

const BUTTON = Style.button`
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

const SignUp = (props) => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })




    const changeHandler = e => {
        return setCredentials({
        ...credentials, [e.target.name]: e.target.value
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/auth/register', credentials)
            .then(res => {
                console.log(res)
                axiosWithAuth().post('http://localhost:5000/api/auth/login', credentials)
                    .then(res =>
                        localStorage.setItem('token', res.data.token),
                        props.history.push('/home')
                        )
            })

    }




    return(
  
        <DIV>
            <FORM onSubmit={handleSubmit}>
                <INPUT className='signup_input'
                    name='username'
                    placeholder='username'
                    onChange={changeHandler}
                />


                <INPUT className='signup_input'
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={changeHandler}
                />
                <BUTTON className='signup_btn' type='submit'>Create Account</BUTTON>
            </FORM>
            <LINKDIV>
                <H2>Already have an account?</H2>
                <DIV4>
                    <Link className='link_signup' to='/login'>Log in</Link>
                </DIV4>
            </LINKDIV>
        </DIV>
    )
}


export default SignUp;