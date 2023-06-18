import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Pet from '../assets/images/pet.gif';

function App() {
    const pet_name = window.localStorage.getItem('name');
    const[name, setName] = useState(pet_name);

    useEffect(() => {
        console.log('useEffect');
        document.getElementById('pet').append(name);
    }, []);

    useEffect(() => {
        console.log('useEffect2');
        window.localStorage.setItem('name', name);
    }, [name]);

    const handleSetName = (e) => {
        console.log(`handleSetName + ${name}`); 
        e.preventDefault();
        document.getElementById('pet').textContent=name;               
    }

    const handleReset = (e) => {
        e.preventDefault();
        window.localStorage.removeItem('name');
        document.getElementById('pet').textContent='';
    }

    return (
        <>
            <h1>MY PET</h1>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <div className='namefield'>
                        <Form.Control type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter pet name'/>
                        <Button variant='btn btn-dark btn-lg' type='submit' onClick={handleSetName}> Set Pet Name </Button>
                        <Button variant='btn btn-dark btn-lg' type='submit' onClick={handleReset}> Clear Cache </Button>
                    </div>
                    <div className='btn'>
                        
                    </div>  
                </Form.Group>
                             
            </Form>
            <div id='container'>
                <img src={Pet}></img>
                <h2>Hello I'm <span id='pet'></span></h2>
            </div>
        </>
    )
}

export default App;
