import styled from "@emotion/styled";
import * as React from 'react';
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Input, TextField,Button} from "@mui/material";




const ButtonSend = styled(Button)`
background: transparent;
color: #FF9F1C;
 display: flex;
 gap: 15px;
 font-weight: bold;
 cursor: pointer;
 font-weight: 700;
`;

const Buttons = styled('div')`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;

`;

  

function IconLabelButtons() {
  return (
    <Buttons>
      <ButtonSend variant='text'>
        Add
        <AddCircleIcon />
      </ButtonSend>
      <ButtonSend variant='text'  href="/" >
        Send 
        <SendIcon />
      </ButtonSend>
      
    </Buttons>
  );
}



const PageStyled = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1em;
    margin-bottom: 2em;
`;

 const PageHeader = styled('div')`
    font-size: 3em;
     color: #FF9F1C;
     font-weight: 500;
     font-family: "American Typewriter",sans-serif;
     margin-top: 1em;
 `;


 const QuoteAdderStyled = styled('div')`
     display: flex;
     width: 100%;
     flex-direction: row-reverse;
     justify-content: center;
     gap: 3em;
     direction: rtl;
 `;



 
 const QuotesListStyle = styled('div')`
    display: flex;
     flex-direction: column;
     width: 100%;
     height: 90%;
     gap: 1em;
     overflow: scroll;
 `;


export default function Ilay () {
 
    return (
        <PageStyled>
          
         <PageHeader>Add Quote</PageHeader>
         <QuotesListStyle />
        <IconLabelButtons />
        </PageStyled>

    )
}
