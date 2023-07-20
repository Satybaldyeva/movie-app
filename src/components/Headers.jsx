import React from 'react'
import { useState } from 'react';
import {styled} from 'styled-components'
import { Modal } from './Modal';
import ReactDOM from 'react-dom'

export const Headers = () => {

  const [isModalActive, setIsModalActive]=useState(false)

const toggleModal = ()=>{
  setIsModalActive((prevState)=>!prevState)
  // e.stopPropagation()
}

  return (
    <>
       <StyledHeaders>
        <p>Favorite Movies</p>
        <StyledButton onClick={toggleModal}>ADD MOVIE</StyledButton>
      </StyledHeaders>
      {isModalActive ? ReactDOM.createPortal( <Modal onClose={toggleModal}/> , document.getElementById('modal')): null }
    </>
   
  )
}

const StyledHeaders = styled('div')`
    background-color: rgb(7, 7, 151);
    display: flex;
    justify-content: space-between;
    padding: 8px 25px;
    color: white;
    font-weight: 700;
`

const StyledButton = styled('button')`
    background-color: rgb(243, 162, 14);
    border-radius: 8px;
    border: none;
    color: white;
    padding: 14px;
    font-weight: 400;
`