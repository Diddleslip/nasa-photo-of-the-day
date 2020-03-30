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
            <Anchor href="https://www.google.com/">A</Anchor>
            <Anchor href="https://www.google.com/">B</Anchor>
            <Anchor href="https://www.google.com/">C</Anchor>
            <Anchor href="https://www.google.com/">D</Anchor>
        </Nav>
    )
}