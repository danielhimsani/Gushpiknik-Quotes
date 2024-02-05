import styled from "@emotion/styled";
import CustomizedSelects from "./textboxinput.jsx";

const AddQuotePageStyled = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`;



export default function AddQuotePage () {
    return (
        <AddQuotePageStyled>
        <CustomizedSelects></CustomizedSelects>
        </AddQuotePageStyled>

    )
}
