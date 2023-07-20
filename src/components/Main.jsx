import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import {styled} from 'styled-components'
import {Modal2} from './Modal2'
import { useRef } from 'react'

export const Main = () => {

    const movies = [
        {
          id: '1',
          title: 'Avatar 1',
          rating: 4,
          img: 'https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200',
    
        },
        {
          id: '2',
          title: 'Kunfu panda',
          rating: 5,
          img: 'https://resizing.flixster.com/_2esMBoxZYR2J-kigzzlioEBVxU=/300x300/v2/https://resizing.flixster.com/v8Q5J8Ltz0JKAcWFnEF04YPdINg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY2NTlhNTAyLWM2OWYtNDVjNi1iYmIzLWNhZTI2NDhjNDRhZC53ZWJw',
        },
        {
          id: '3',
          title: 'Naruto Shipuden',
          rating: 5,
          img: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        },
        {
          id: '4',
          title: 'Hobbit',
          rating: 5,
          img: 'https://upload.wikimedia.org/wikipedia/ru/3/32/The_Hobbit._An_Unexpected_Journey.jpg',
        }
    
      ];

    const [movie, setMovie]=useState([...movies])
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [modalId, setModalId] = useState(null);

    const titleRef = useRef('')
    console.dir(titleRef)

   const deleteByIdHandle = ()=>{
       
        setMovie(prevState => prevState.filter(item=> item.id !==modalId))
        setIsVisibleModal(false)
   }




//    const edittedMovieById = (id)=>{
//         setMovie((movie)=>movie.filter((item)=>item.id !== id))
//    }






console.log(modalId);
const toggleModalHandle =(id)=>{
  setIsVisibleModal(true)
  setModalId(id)
 
}

// const [modalId, setModalId] = useState(null);

// const handleDeleteClickModal = (id) => {
//   setShowDeleteModal(!showDeleteModal);
//   setModalId(id);
// };


// const deleteByIdHandle = ()=>{

// }

  return (

  <>
       <StyledContainer> 

     {movie.map((item)=>(
            <StyledBlock key = {item.id}>
                <StyledImg src={item.img} alt={item.title} />
                <StyledBlock1 key = {item.id} >
                    <h2>{item.title}</h2>
                    <StyledItem>{item.rating}/5 stars</StyledItem>
                    <StyledDlt onClick = {()=>toggleModalHandle(item.id)}>DELETE</StyledDlt>
                    <StyledEdit >EDIT</StyledEdit>
                </StyledBlock1>
            </StyledBlock>
        ))}
 
      
     </StyledContainer>
     {isVisibleModal ? ReactDOM.createPortal(<Modal2 onClose={setIsVisibleModal} onDeleteByIdHandle={ deleteByIdHandle}/>, document.getElementById('modal2')) : null}
  </>

  )
}

const StyledContainer = styled('main')`
   width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const StyledBlock = styled('div')`
   display: flex;
  width: 80%;
  margin-top: 20px;
  box-shadow: 2px 2px 3px rgb(132, 129, 129);
  border-radius: 10px;
`

const StyledBlock1 = styled('div')`
   padding: 20px;
`

const StyledItem = styled('span')`
    background-color: rgb(249, 176, 40);
    border-radius: 15px;
    padding: 7px 10px;
    margin-right: 10px;
    color: white;
`

const StyledDlt = styled('button')`
    background-color: red;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: 700;
    border: none;
    margin-left: 20px;
`

const StyledEdit = styled('button')`
    background-color: rgb(27, 27, 205);
    color: white;
    padding: 10px 17px;
    border-radius: 8px;
    font-weight: 700;
    border: none;
    margin-left: 20px;
`

const StyledImg = styled('img')`
  width: 300px;
  height: 180px;
  border-radius: 10px;
`