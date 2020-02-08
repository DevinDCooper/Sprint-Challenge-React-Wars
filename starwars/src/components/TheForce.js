import React ,{useState, useEffect} from "react";

import axios from "axios";
import PersonCard from "./PersonCard"
import { Container, Row } from "reactstrap";
const TheForce = () => {

    const initialState = [];
    const [PersonData, setPersonData] = useState(initialState);
    
    const effectCallBackFn = () => {
        console.log('calling from fn!');
        axios
        .get("https://swapi.co/api/people/")
        .then(response => {
            console.log("response from api",response);
            setPersonData(response.data.results);
        })
        .catch(error => console.log(error));
    };
    
    useEffect(effectCallBackFn, []);
    
    console.log('initial render of PersonData', PersonData);
    return (
    <div>
       <Container>
           <Row>
        {PersonData.map(people =>{
            return <PersonCard people={people} key={people.id}/>
        })};
        </Row>
        </Container>
    </div>
    )
    
    };
    
    
    
    
    
    export default TheForce;


