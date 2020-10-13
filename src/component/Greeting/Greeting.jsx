import React from 'react';
import { Container } from 'react-bootstrap';


const Greeting = ({name}) =>{
    return(
        
        <Container fluid>
            <header>
                <h1>Greetings, {name}! Have fun coding with JavaScript!!</h1>
            </header>    
        </Container>
        

    );
};

export default Greeting;