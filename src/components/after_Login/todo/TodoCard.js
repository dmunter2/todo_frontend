import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
word-wrap: break-word;
margin-top: 10%;
justify-content: center;
`
const DIV1 = Style.div`
// border: 4px solid black;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

margin: 3%;
padding: 1.8%;
border-radius: 10px;
width: 240px;
height: 250px;
`

const H2 = Style.h2`
font-size: 15px;
border-bottom: 1px solid black;
`

const H2O = Style.h2`
font-size: 15px;

`

const TodoCard = props => {

  

    return (
        <DIV>
            {props.todolist.map(todo => {
                return (
                    <DIV1 key={todo.id}>
                        <H2>{todo.title}</H2>
                        <H2O>{todo.description}</H2O>
                    </DIV1>
                )
            })}
 
        </DIV>
    

    )
}



export default TodoCard;
