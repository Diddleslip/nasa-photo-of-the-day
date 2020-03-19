import styled from 'styled-components';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Col, Badge
  } from 'reactstrap';

const Title = styled.h1`
  background: black;
  color: white;
  margin: 1.5vw .2vw;
  font-size: 5vw;
  padding: 1.5vw;
  border-color: green;
`;

export default function NASAInfo(props) {
    console.log("NASAInfo: props ", props);
    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
                <Title>Title: {props.title}</Title>
                <CardSubtitle>Date: {props.date}</CardSubtitle>
                <CardImg src={props.hdurl} alt="A beautiful display of NASA'S API showing a new sunrise everyday from their catalog."/>
                <CardBody>{props.description}</CardBody>
                <Badge>{props.copyright}</Badge>
            </Card>
        </Col>
    )
}
