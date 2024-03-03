import styled from "@emotion/styled"
import {Card} from "@mui/material";


const HomePageBodyStyled = styled('div')`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 5em;
    gap: 1.5em;
`;


const QuoteStyled = styled(Card)`
    width: 80%;
    padding: 1em;
    background-color: #FFBF69;
    opacity: 0.75;
`;

const LineStyled = styled('div')`
    display: flex;
    flex-direction: row;
    gap: 1em;
    direction: rtl;
`;

function QuoteLine({quoter, quote}) {
    return <LineStyled>
        <b>{quoter}:</b>
        <div>{quote}</div>
    </LineStyled>
}

function QuoteCard({quotes}) {
    return <QuoteStyled>
        <QuoteLine quoter={"דניאל"} quote={"שמע אתה חתיכת מניאק"} />
        <QuoteLine quoter={"דניאל"} quote={"שמע אתה חתיכת מניאק"} />

    </QuoteStyled>
}

export default function HomePageBody() {
    return (
        <HomePageBodyStyled>
            <QuoteCard/>
            <QuoteCard/>
            <QuoteCard/>
            <QuoteCard/>
        </HomePageBodyStyled>

    )
}