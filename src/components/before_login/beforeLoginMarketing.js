import React from 'react';
import Style from 'styled-components';
import Todo1 from './todo1.PNG'
import Todo2 from './todo2.PNG'
import Todo3 from './todo3.PNG'
import { Link } from 'react-router-dom';
import Logo from './logo.png'


const DIV = Style.div`
border-top: 2px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 500px) {
    display: flex;
    align-items: baseline;
    padding-left: 3%;
}

`

const DIV1 = Style.div`
font-family: 'Noto Sans', sans-serif;
font-size: 2rem;
width: 60%;

@media (max-width: 500px) {
    font-size: 1.5rem;
}


`
const H1 = Style.h1`




`

const H2 = Style.h2`
background-color: black;
border-radius: 7px 7px 0 0;
color: white;
padding: 2%;


@media (max-width: 500px) {
    height: 80px;
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: 40px;

}



`


const DIV2 = Style.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`
const DIV3 = Style.div`
margin: 10px;
width: 300px;
border: 2px solid black;
text-decoration: none;
border-radius: 10px;
height: 400px;
`
const H4 = Style.h3`
margin-top: 8px;
margin-bottom: 8px;
color: black;
margin-left: 2%;
`

const IMG = Style.img`
width: 300px;
height: 220px;
border-radius: 8.7px 8.7px 0 0;

`
const H5 = Style.h5`
margin-top: 20px;
margin-left: 2%;
margin-right: 2%;
color: gray;
`

const A = Style.a`
text-decoration: none;


@media (max-width: 500px) {
    margin-bottom: 50px;
}

`

const H6 = Style.h1`
font-family: 'Long Cang', cursive;
font-size: 4.9rem;
margin-top: 0;
margin-bottom: 0;
`



const IMG2 = Style.img`
margin-top: 20px;
height: 60px;
width: 65px;

`
const FOOTER = Style.footer`
margin-top: 400px;
height: 100px;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 500px) {
    margin-top: 200px;
}

`



const beforeLoginMarketing = () => {


    return (
        <div>
            <DIV>
                <DIV1>
                    <H1>
                        Schedule whats important to you.
                    </H1>
                </DIV1>
            </DIV>

                <H2>
                    See what the experts say
                </H2>

                <DIV2>

                    <A href="https://bizfluent.com/about-6680670-project-scheduling-important-.html">
                        <DIV3 className='article_hover' >
                            <IMG src={Todo1} />
                            <H4>  Why is Scheduling important?</H4>
                            <H5>How you manage resources can make or break a project. If equipment arrives late, people are scheduled for other projects, someone forgets necessary tools or a room you need to access is locked, the schedule is delayed and this could jeopardize the project.</H5>
                        </DIV3>
                    </A>
                 


                    <A href='https://www.lifehack.org/articles/productivity/why-to-do-lists-dont-work-and-done-lists-do.html'>
                        <DIV3 className='article_hover' >
                            <IMG src={Todo2} />

                            <H4>Making a better to-do list</H4>
                            <H5>Instead, at the end of the day, spend around ten to fifteen minutes prioritizing the next day. Pick the ten most important tasks on your list and highlight them in some way.</H5>

                        </DIV3>
                    </A>
             

                    <A href='https://www.theguardian.com/lifeandstyle/2017/may/10/the-psychology-of-the-to-do-list-why-your-brain-loves-ordered-tasks'>

                        <DIV3 className='article_hover'>
                            <IMG src={Todo3} />
                            <H4>The psychology of a to-do list</H4>
                        <H5>One trap people fall into is to consistently avoid tackling the larger, more major projects. The best way to overcome this is to break them down into much smaller, achievable blocks.</H5>

                        </DIV3>

                    </A>


             
               



                </DIV2>
            <FOOTER>

                <Link className='todo_logo' to='/'>
                    <IMG2 src={Logo}></IMG2>
                </Link>

                <Link className='todo_logo' to='/'>
                    <H6>Todo</H6>
                </Link>

            </FOOTER>

        </div>
    )
}

export default beforeLoginMarketing;


