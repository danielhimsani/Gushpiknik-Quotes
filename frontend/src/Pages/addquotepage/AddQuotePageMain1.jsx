import styled from "@emotion/styled";
import * as React from 'react';
import {useEffect, useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Input, TextField,Button} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from '@mui/icons-material/Delete';



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

function QuoteAdderLine({quote, quotes, setQuotes,index}){
    console.log(quotes);



    const [inputQuote ,SetInputQuote] = useState(Object.values(quote)[0]);
    const [selectedName ,SetSelectedName] = useState(Object.keys(quote)[0]);

    useEffect(() => {
        updateQuotes();
    });


    const handleInputChange = (event) => {
        SetInputQuote(event.target.value);

    };
    const handleOptionChange = (event) => {
        SetSelectedName(event.target.value);
    };

    const handleDelete = () => {
        console.log("Deleting quote at index:", index);
        setQuotes((quotes) => {
            const updatedQuotes = quotes.filter((_, i) => i !== index);
            return updatedQuotes;
        });
    };


    const updateQuotes = () => {
        const tmpQuotes = quotes;
        const tmpObject = {};
        tmpObject[selectedName] = inputQuote;
        tmpQuotes[index] = tmpObject;
        setQuotes(tmpQuotes);
    }



    return <QuoteAdderStyled>

        <TextField  type="text"
                    value={inputQuote}
                    onChange={handleInputChange}
                    placeholder="Enter text..."/>
        <Select  variant={"standard"}  value={selectedName} onChange={handleOptionChange}>
            <MenuItem value="hemo" >hemo</MenuItem>
            <MenuItem value="ronen" >ronen</MenuItem>
            <MenuItem value="shonen" >shonen</MenuItem>
        </Select>

        <ButtonSend  onClick={handleDelete}><DeleteIcon/></ButtonSend>
        <div>{index}</div>



    </QuoteAdderStyled>
}

function QuotesList({quotes, setQuotes}) {
    return <QuotesListStyle>
        {quotes.map((quote, index) => <QuoteAdderLine key={index}  quotes={quotes} quote={quote} setQuotes={setQuotes} index={index} />)}
    </QuotesListStyle>
}


function IconLabelButtons({quotes, setQuotes}) {
    return (
        <Buttons>
            <ButtonSend variant='text' onClick={() => setQuotes([...quotes, {}])}>
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



export default function AddQuotePage () {
    const [quotes, setQuotes] = useState([{"ronen": "hemo"}]);


    return( <PageStyled>
            <PageHeader>Add Quote</PageHeader>
            <QuotesList quotes={quotes}  setQuotes={setQuotes} />

            <IconLabelButtons quotes={quotes}  setQuotes={setQuotes} />
        </PageStyled>

    );

}