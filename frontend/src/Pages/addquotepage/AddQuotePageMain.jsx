import styled from "@emotion/styled";
import CustomizedSelects from "./textboxinput.jsx";
import * as React from 'react';
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const AddQuotePageHeader = styled('div')`
    display: flex;
    position: absolute; /* Make the component position absolute */
    top: 0;
    left: 40%;
    justify-content: center;
    align-items: top;
    color: maroon;
    font-weight: bold;
    font-size: 30px;
    background-color: orangered;
`;

  const ButtonSend = styled('Button')`
    color: white;
    background-color: black;
    display: flex;
    alignItems: center; 
    gap: 15px;
`;

const Buttons = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
  

 function IconLabelButtons({quotes, setQuotes}) {
  return (
    <Buttons>
      <ButtonSend variant="contained" onClick={() => setQuotes([...quotes, {}])}>
        הוסף ציטוט
        <AddCircleIcon />
      </ButtonSend>
      <ButtonSend variant="contained">
        שלח
        <SendIcon />
      </ButtonSend>
      
    </Buttons>
  );
}






export default function AddQuotePage () {
  const [quotes, setQuotes] = useState([{
    quoter: "test",
    quote: "test"
  }]);



    return (
        <div>
        <AddQuotePageHeader>
        Add Qoute 
        </AddQuotePageHeader>
        {quotes.map((quote) => <CustomizedSelects key={"lol"} quote={quote} setQuotes={setQuotes} />)}
        <IconLabelButtons quotes={quotes}  setQuotes={setQuotes} />
        </div>

    )
}
