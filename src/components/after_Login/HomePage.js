import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import HomeCard from './HomeCard'
import Style from 'styled-components';

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





export default function HomePage() {
    const [todos, setTodos] = useState([])
    

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/todo/task')
            .then(res => setTodos(res.data))
            // .then(res => console.log(res.data))
            .catch(err => console.log(err))





    },[])

        
    return (
        <div>
            <DIV1>
                <HEADER>Active Todos</HEADER>
                <DIV3>
                    {
                        todos.map((data, index) => {
                            return <HomeCard key={index} title={data.title} description={data.description} setTodos={setTodos}/>
                        })
                    }
                </DIV3>
          
            </DIV1>            
            
        </div>
    )
}

// export default HomePage;



// export default function NasaList() {
//     const [photos, setPhotos] = useState();
//     const [titles, setTitles] = useState();
//     const [explanation, setExplanation] = useState();

//     useEffect(() => {
//         axios
//             .get('https://api.nasa.gov/planetary/apod?api_key=J9kmqCDGVQ2AzU68n8Dcl5BJ1pSoAtgFHkTPgNYr')
//             .then(data => {
//                 setPhotos(data.data.url)
//                 setTitles(data.data.title)
//                 setExplanation(data.data.explanation);

//                 // if (data.data.url !== 'this'){
//                 //     return(
//                 //     )
//                 // }
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }, []);
//     return (
//         <div> <NasaCard imgUrl={photos} titleInfo={titles} textInfo={explanation} />
//         </div>

//     );
// }