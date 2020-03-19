import React from "react";
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2% 0%;
`;

const Anchor = styled.a`
    font-size: 2vw;
`;

export default function NavFunc() {
    return (
        <Nav>
            <Anchor href="https://www.google.com/">Click here for Sexy Time</Anchor>
            <Anchor href="https://www.google.com/">sexy Stuff Part. 2</Anchor>
            <Anchor href="https://www.google.com/">Click Here If Brave</Anchor>
            <Anchor href="https://www.google.com/">Barrack Obama's Nudes Leaked?!</Anchor>
        </Nav>
    )
}