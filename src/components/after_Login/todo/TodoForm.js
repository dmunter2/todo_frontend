import React, { useState } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth';
import Style from 'styled-components';



const DIV = Style.div`
width: 400px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

display: flex;
padding-bottom: 100px;
justify-content: center;
flex-direction: column;

`


const H1 = Style.h1`
display: flex;
justify-content: center;
`


const FORM = Style.form`
display: flex;
flex-direction: column;
align-items: center;
`


const INPUT = Style.input`
width: 320px;
padding: 1.5%;
margin-bottom: 2%;
border-radius: 10px;
font-size: 20px;
border: 2px solid black;
font-family: 'Open Sans', sans-serif;
`

const INPUT2 = Style.textarea`
width: 320px;
padding: 1.5%;
margin-bottom: 2%;
border-radius: 10px;
border: 2px solid black;
font-family: 'Open Sans', sans-serif;
font-size: 15px;
`

const BUTTON = Style.button`
width: 340px;
border: 1px solid grey;
padding: 2.8%;
border-radius: 10px;
border: 2px solid black;
background-color: black;
color: white;
margin-top: 10%;
// margin-bottom: 10%;
font-size: 20px;


`






const TodoForm = props => {
    const [todo, setTodo] = useState({
        // id: Math.random(),
        title: "",
        description: "",

    })


    const submitForm = e => {
        e.preventDefault();
        let newtodo = {
            ...todo,
            id: Date.now()
        };
        props.addnewtodo(newtodo);

        axiosWithAuth()
            .post('https://todoappp1.herokuapp.com/api/todo/create', todo)
            .then(res => {
                console.log(res, {message: "success"})
            })
            .catch(err => {
                console.log(err)
            })
    };

    const changeHandler = e => {
        return setTodo({
            ...todo, [e.target.name]: e.target.value
        })

    }


    return (
        <DIV>
            <H1>Add a todo</H1>

            <FORM onSubmit={submitForm}>
                <INPUT
                    className='title_input'
                    placeholder='title'
                    name='title'
                    onChange={changeHandler}
                    value={todo.title}
                    
                />

                <INPUT2
                    className='description_input'
                    placeholder='description'
                    name='description'
                    onChange={changeHandler}
                    value={todo.description}
                />

                <BUTTON type='submit'>Add</BUTTON>


            </FORM>

        </DIV>
    )
}

export default TodoForm;