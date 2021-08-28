import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import styled from 'styled-components';

const ListItemStyled = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Helvetica';
    width: 100%;
    height: 100%;
    padding: 10 10 10 10;
    margin: 10 10 10 10;
    background-color: lightblue;
`

const InputFieldStyled = styled.input`
    border: ${props => props.isEdit ? '2px solid red' : '0'};
    cursor: default;
`

const ChecklistItem = ({ id, defaultText, isFinished, onRemove, onFinishTask }) => {

    const [itemId] = useState(id);

    const [text] = useState(defaultText);

    const [itemIsFinished, setItemIsFinished] = useState(isFinished);

    const [isEdit, setIsEdit] = useState(false);

    const onDeleteListItem = (id) => {
        console.log("Inform the above that this item has been changed with a callback?");
        onRemove(id);
    }
    
    const onCheckmarkUpdate = (id) => {
        console.log("Inform the above that this item was checkmarked and have a percentage bar to show how complete this page is?");
        setItemIsFinished(!itemIsFinished)
        onFinishTask(id, !itemIsFinished)
    }

    return(
        <ListItemStyled>
            <input
                type="checkbox"
                checked={itemIsFinished}
                defaultValue={isFinished}
                onChange={()=>onCheckmarkUpdate(id)}
            />
            <InputFieldStyled
                defaultValue={text}
                disabled={!isEdit}
                isEdit={isEdit}
            />
            <AiOutlineEdit onClick={()=>setIsEdit(!isEdit)}/>
            <AiOutlineCloseCircle onClick={()=>onDeleteListItem(itemId)}/>

        </ListItemStyled>
    );
}

export default ChecklistItem;