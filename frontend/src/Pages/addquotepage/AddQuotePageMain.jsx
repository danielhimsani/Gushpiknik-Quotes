import styled from "@emotion/styled";
import CustomizedSelects from "./textboxinput.jsx";
import * as React from 'react';
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
    const Stack1 = styled('Stack')`
        display: flex;  
        width: 300px;
        justify-content: space-between;
        `;

  const ButtonSend = styled('Button')`
    color: white;
    background-color: black;
    display: flex;
    alignItems: center; 
    gap: 15px;
    `;
  

    

    

 function IconLabelButtons() {

  
  return (
    <Stack1>
      <ButtonSend variant="contained" >
        הוסף ציטוט
        <AddCircleIcon />
      </ButtonSend>
      <ButtonSend variant="contained">
        שלח
        <SendIcon />
      </ButtonSend>
      
    </Stack1>
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
