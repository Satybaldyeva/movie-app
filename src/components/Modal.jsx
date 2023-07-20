import React from 'react'
import {styled} from 'styled-components'



export const Modal = ({onClose}) => {

  return (
    // onClick={e=>e.stopPropagation()}
   <>
       <Backdrop onClick={onClose}/>
       <StyledContainer >
         <StyledForm >
          <label htmlFor="">Movie id</label>
         <input type="text" placeholder='id'/>  <br/>
         <label htmlFor="">Movie Title</label>
         <input type="text" placeholder='title movie' /> <br/>
         <label htmlFor="">Your Rating</label>
         <input type="number" placeholder='rating movie'/><br/>
         <label htmlFor="">Image</label>
         <input type="text"  placeholder='link img movie'/> <br/>
         </StyledForm>
       <StyledButton >Добавить</StyledButton>
       <StyledDlt onClick={onClose}>НЕТ</StyledDlt>
      
       
      </StyledContainer>
   </>
   
  )
}

const Backdrop = styled('div')`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 995;
    background-color: rgba(0, 0, 0, 0.75);
    top: 0;
    left:0;
`

const StyledContainer = styled('div')`
    width: 400px;
    height: 400px;
    position: fixed;
    z-index: 997;
    top: 40%;
    left: 40%;
    transform: translate(-35%, -35%);
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 2px grey;
`

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  margin: 10px;
`
const StyledButton = styled('button')`
    background-color: rgb(27, 27, 205);
    color: white;
    padding: 10px 17px;
    border-radius: 8px;
    font-weight: 700;
    border: none;
    margin-left: 20px;
    &:hover{
      color: grey;
    }
`
const StyledDlt = styled('button')`
    background-color: red;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: 700;
    border: none;
    margin-left: 20px;
    &:hover{
      color: grey;
    }
`