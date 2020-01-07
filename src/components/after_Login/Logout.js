import React, {useState} from 'react';
import Style from 'styled-components';

const H1 = Style.h1`
font-weight: 600;
margin: 0;
`
const H2 = Style.h2`
font-size: 15px;
position: absolute;
font-weight: 500;
border: 1px solid black;
padding: .3%;
`
const DIV2 = Style.div``
const DIV3 = Style.div``

const DIV = Style.div`
// border: 1px solid red;
`

const Logout = () => {

    const [display, setDisplay] = useState('no-display')

    function ClickHandler(e){
        e.preventDefault();
        localStorage.clear()
        // window.location.href ='https://todoappp1.herokuapp.com/'
        
    }


    const handleDisplay = () => {
       setDisplay('display')
    }

    const handleExit = () => {
        setDisplay('no-display')
    }








    return (

        <DIV onMouseEnter={handleDisplay}   className='after-login-div'>
            <DIV2>
                <H1 className='after-login-menu'>Logout</H1>
            </DIV2>

            <DIV3>
                <H2 onMouseLeave={handleExit} onClick={ClickHandler} className={display}>Sign out</H2>
            </DIV3>
        </DIV>
    )
}

export default Logout;