import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import Style from 'styled-components';
import CompletedCard from './CompletedCard';



const HEADER = Style.div`
padding: 1%;
font-size: 2.5rem;
border-bottom: 2px solid black;
margin-top: 4%;
width: 80%;
display: flex;
justify-content: center;
`


const DIV3 = Style.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-top: 5%;
justify-content: center;
`

const DIV1 = Style.div`
display: flex;
flex-direction: column;
align-items: center;

`





export default function Completed() {
    const [todo, setTodo] = useState([])


    useEffect(() => {
        axiosWithAuth()
            .get('https://todoappp1.herokuapp.com/api/completed/task')
            .then(res => setTodo(res.data))
            // .then(res => console.log(res.data))
            .catch(err => console.log(err))



    }, [])


    return (
        <div>
            <DIV1>
                <HEADER>Completed Todos</HEADER>
                <DIV3>
                    {
                        todo.map((data, index) => {
                            return <CompletedCard key={index} title={data.title} description={data.description} setTodo={setTodo}/>
                        })
                    }
                </DIV3>

            </DIV1>

        </div>
    )
}
