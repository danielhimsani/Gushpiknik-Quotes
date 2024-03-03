import styled from "@emotion/styled";
import CustomizedSelects from "./textboxinput.jsx";
import * as React from 'react';
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import AddCircleIcon from '@mui/icons-material/AddCircle';


  const ButtonSend = styled('Button')`
    color: white;
    background-color: black;
    display: flex;
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


const PageStyled = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1em;
`;

 const PageHeader = styled('div')`
    font-size: 3em;
     color: #FF9F1C;
     font-weight: 500;
     font-family: "American Typewriter",sans-serif;
     margin-top: 1em;
 `;



export default function AddQuotePage () {
  const [quotes, setQuotes] = useState([{
    quoter: "test",
    quote: "test"
  }]);
    return (
        <PageStyled>
            <PageHeader>Add Quote</PageHeader>
            <div>
                {quotes.map((quote) => <CustomizedSelects key={"lol"} quote={quote} setQuotes={setQuotes} />)}
            </div>
        <IconLabelButtons quotes={quotes}  setQuotes={setQuotes} />
        </PageStyled>

    )
}
