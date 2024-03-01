import styled from "@emotion/styled"

const AboutPageStyled = styled('div')`
    display: flex;
    width: 100%;
    color: black;
    height: 100%;
    justify-content: center;
    align-items: top;
`;


export default function AboutPage() { 
    return (
        <AboutPageStyled>
        About us
        </AboutPageStyled>

    )
}