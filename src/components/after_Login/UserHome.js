import React, {useState} from 'react'
import Navigation from './Navigation'
// import PrivateAppRouter from '../PrivateAppRouter'
import {Route} from 'react-router-dom'
import HomePage from './HomePage'
import AddTodo from './AddTodo'
import Style from 'styled-components'
import AfterLogin from './AfterLogin'
import Completed from './Completed'
const DIV = Style.div`

width: 90%;



`
const DIV1 = Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;

@media (max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


`

const UserHome = () => {


    const [todos, setTodos] = useState([])


    const addnewtodo = todo => {
        setTodos([...todos, todo])
    }


    return(
        <DIV>
            <DIV1>
                <Route exact path='/(home/homepage|home/addtodo|home/completed)' component={AfterLogin} />
                <Navigation />
            </DIV1>

            <Route exact path='/home/completed' component={Completed} />
            <Route exact path='/home/homepage' component={HomePage} />
            <Route path='/home/addtodo' render={props => (<AddTodo {...props} todolist={todos} addnewtodo={addnewtodo} />)} />

        </DIV>
    )
}

export default UserHome;
