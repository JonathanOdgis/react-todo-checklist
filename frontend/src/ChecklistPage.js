import React, { useState, useEffect } from 'react';
import ChecklistItem from './ChecklistItem';
import { AiOutlinePlusCircle } from "react-icons/ai";
import styled from 'styled-components';

const CheckListStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: lightgreen;
`

// build out defaults
const initialList = [
    {
      id: 0,
      text: 'Do The Dishes',
      isFinished: false
    },
    {
      id: 1,
      text: 'Brush Your Teeth',
      isFinished: false
    },
    {
      id: 2,
      text: 'Make Your Bed',
      isFinished: false
    },
  ];
  
const ChecklistPage = () => {

    const [list, setList] = useState(initialList);

    const onAdd = () => {
        var newList = [...list]
        newList.push({id: list.length+1, text: 'example here...', isFinished: false});
        setList(newList);
    }

    const onRemove = (id) => {
        const newList = list.filter((item) => item.id !== id);
        newList.forEach((item, index) => {item.id = index; index++});
        console.log(newList)

        setList(newList);
    }

    const onFinishTask = (id, isFinished) => {
        var newList = [...list]
        newList.map((item) => {if (item.id === id) item.isFinished = isFinished});
        console.log("On Finish Task", newList);
        setList(newList);
    }


    return(
        <div>
            <div>
                <h1>Tasks Complete - {(list.filter((item) => item.isFinished).length)}/{list.length} {Math.ceil((list.filter((item) => item.isFinished).length / list.length) * 100)}% </h1>
            </div>
            <AiOutlinePlusCircle onClick={onAdd}/>

            <CheckListStyled>
                <div>
                    {list.map((item) => (<ChecklistItem id={item.id} defaultText={item.text} onRemove={onRemove} isFinished ={item.isFinished} onFinishTask={onFinishTask}/>))}
                </div>
            </CheckListStyled>
        </div>
    );
}

export default ChecklistPage;