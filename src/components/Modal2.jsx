import React from 'react'
import {styled} from 'styled-components'

export const Modal2 = ({onClose, onDeleteByIdHandle}) => {
    const handleBackdropClick = (e) => {
        // Предотвращаем всплытие события, чтобы клик на backdrop не влиял на другие элементы
        e.stopPropagation();
        // Закрываем модальное окно
        onClose(false);
      };

  return (
    <Backdrop1 onClick={ handleBackdropClick}>
        <StyledContainer1>
            <h3>Вы действительно хотите удалить этот фильм?</h3>
            <StyledButton1 onClick={()=>onClose(false)}>НЕТ</StyledButton1>
            <StyledDlt1 onClick={onDeleteByIdHandle} >ДА</StyledDlt1>
        </StyledContainer1>
    </Backdrop1>
  )
}


const Backdrop1 = styled('div')`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.75);
    top: 0;
    left:0;
`

const StyledContainer1 = styled('div')`
    width: 400px;
    height: 200px;
    position: fixed;
    z-index: 997;
    top: 40%;
    left: 40%;
    transform: translate(-35%, -35%);
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 2px grey;
`

const StyledButton1 = styled('button')`
    background-color: rgb(27, 27, 205);
    color: white;
    padding: 10px 17px;
    border-radius: 8px;
    font-weight: 700;
    border: none;
    margin-left: 20px;
`

const StyledDlt1 = styled('button')`
    background-color: red;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: 700;
    border: none;
    margin-left: 20px;
`