import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, CardImgOverlay,CardGroup
  } from 'reactstrap';






const PersonCard= ({people}) => {
    return (
      <div>
          
           <CardGroup>
           <Col xs="" md="" xl="">
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardBody>
            <CardTitle>Name: {people.name}</CardTitle>
            <CardText>Height: {people.height}</CardText>
            <CardText>Mass: {people.mass}</CardText>
            <CardText>Hair color: {people.hair_color}</CardText>
            <CardText>Skin color {people.skin_color}</CardText>
            <Button>May The Force Be With You</Button>
          </CardBody>
        </Card>
        </Col>
        
        </CardGroup>
      </div>
    );
  };
  


export default PersonCard;