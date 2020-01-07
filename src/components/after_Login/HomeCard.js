import React, {useState} from 'react'
import Style from 'styled-components';
import Delete from './trash.png'
import Complete from './complete.png'
// import axiosWithAuth from '../utils/axiosWithAuth';
import Axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
// const DIV = Style.div`
// border: 1px solid black;
// `
const DIV = Style.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
word-wrap: break-word;
// margin-top: 10%;
width: 300px;
justify-content: center;
`
const DIV1 = Style.div`
// border: 1px solid black;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
display: flex;
flex-direction: column;

margin: 3%;
padding: 1.8%;
border-radius: 10px;
width: 240px;
// height: 250px;
`

const H2 = Style.h2`
font-size: 15px;
border-bottom: 1px solid black;
`

const H3 = Style.h2`
font-size: 15px;
height: 130px;
`

const CD = Style.div`
// margin-top: 50px;
display: flex;
justify-content: center;
`

const COMPLETE = Style.div`
margin: 3%
`


const DELETE = Style.div`
margin: 3%;
`


const IMG = Style.img`
height: 40px;

`

const DIV8 = Style.div``

const HomeCard = ({title, description, setTodos}) => {

    const [completed, setCompleted] = useState('display')



    const DeleteTodo = e => {
        e.preventDefault();
        console.log(title)
        axiosWithAuth()
            .delete('https://todoappp1.herokuapp.com/api/todo/title', {
                data: {
                    title
                }
            })
            .then(res => setTodos(res.data))
            .catch(err => console.log(err))
    }



    const AddToCompleted = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('https://todoappp1.herokuapp.com/api/completed/check',{
                title: title,
                description: description
            })
            .then(() => {
                axiosWithAuth()
                    .delete('https://todoappp1.herokuapp.com/api/todo/title', {
                        data: {
                            title
                        }
                    })
                    .then(res => setTodos(res.data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }






    
    const updateCompleted = e => {
        e.preventDefault();
        if (completed === 'display'){
            setCompleted('no-display')
        } else if (completed === 'no-display') {
            setCompleted('display')
        }
    }




    return (
        <DIV>
         
            <DIV1 onClick={updateCompleted} className='card_hover'>
                <H2>
                    {title} 
                </H2>

                <H3>
                    {description}
                </H3>

                <DIV8>
                    <CD>
                        <COMPLETE onClick={AddToCompleted}>
                            <IMG  className='deletecomplete' src={Complete} />
                        </COMPLETE>
                        <DELETE  onClick={DeleteTodo}>
                            <IMG className='deletecomplete' src={Delete} />

                        </DELETE>
                    </CD>
                </DIV8>
                
            </DIV1>
    
        
        </DIV>
    )
}

export default HomeCard;







