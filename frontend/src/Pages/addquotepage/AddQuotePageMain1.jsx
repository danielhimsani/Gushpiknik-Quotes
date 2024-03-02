import styled from "@emotion/styled";
import CustomizedSelects from "./textboxinput.jsx";
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const AddQuotePageHeader = styled('div')`
    display: flex;
    position: absolute; 
    top: 0;
    left: 40%;
    justify-content: center;
    align-items: top;
    color: maroon;
    font-weight: bold;
    font-size: 30px;
    background-color: orangered;
    
`;

function Addingqoutes()
{
    const Stack1 = styled('Stack')`
    display: flex;  
    width: 300px;
    justify-content: space-between;
    `;

    const ButtonSend = styled('Button')`
    color: white;
    background-color: black;
    padding: 10px;
    `;

    function IconLabelButtons() {
        return (
          <Stack1>
            <ButtonSend variant="contained" >
              הוסף ציטוט
            </ButtonSend>
            <ButtonSend variant="contained">
              שלח
              <SendIcon />
            </ButtonSend>
          </Stack1>
        );
      }

    return
    (
        
        <IconLabelButtons />
        
    );
}


 
 

export default function AddQuotePage () {
    return (
        <div>
        <AddQuotePageHeader>
        Add Qoute 
        </AddQuotePageHeader>
        <Addingqoutes />
        </div>

    )
}
