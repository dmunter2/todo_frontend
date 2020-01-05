import React from 'react'
import TodoForm from './todo/TodoForm'
import TodoCard from './todo/TodoCard'
import Style from 'styled-components';

const DIV = Style.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;

`

const DIV1 = Style.div`
// width: 60%;
`

const DIV2 = Style.div`

`


const AddTodo = props => {

    return (
        <DIV>
            <DIV1>
                <TodoForm addnewtodo={props.addnewtodo}/>
            </DIV1>

            <DIV2>
                <TodoCard todolist={props.todolist}/>
            </DIV2>


        </DIV>
    )
}

export default AddTodo;