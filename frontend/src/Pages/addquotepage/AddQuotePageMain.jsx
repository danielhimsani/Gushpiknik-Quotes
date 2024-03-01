import styled from "@emotion/styled";
import CustomizedSelects from "./textboxinput.jsx";
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


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

 function IconLabelButtons() {

  const ButtonSend = styled('Button')`
    color: white;
    background-color: black;
    `;
  return (
    <Stack direction="row" spacing={10}>
      <ButtonSend variant="contained" >
        הוסף ציטוט
      </ButtonSend>
      <ButtonSend variant="contained" endIcon={<SendIcon />}>
        שלח
      </ButtonSend>
    </Stack>
  );
}






export default function AddQuotePage () {
    return (
        <div>
        <AddQuotePageHeader>
        Add Qoute 
        </AddQuotePageHeader>
        <CustomizedSelects/>
        <IconLabelButtons/>
        </div>

    )
}
