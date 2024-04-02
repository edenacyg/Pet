import { useEffect, useState } from 'react'; 
import { Button, Form } from 'react-bootstrap';
import Pet from './assets/images/pet.gif';
import { validateForm } from './utils/validation';

function App() {
    const savedName = window.localStorage.getItem('name');
    const [name, setName] = useState(savedName); 
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        window.localStorage.setItem('name', name);
    }, [name]); 

    const handleSetName = (e) => { 
        e.preventDefault();
        const form = e.currentTarget;
        setValidated(true); 
        if (validateForm(form)) { 
            const newName = e.target.elements.name.value; 
            setName(newName); 
            form.reset(); 
            setValidated(false); 
        } 
    }

    const handleReset = () => {
        setName(''); 
        setValidated(false);
    }

    return (
        <>
            <h1>My Pet</h1>
            <Form onSubmit={handleSetName} noValidate validated={validated}>
                <Form.Group controlId='formBasicEmail'>
                    <div className='namefield'>
                        <Form.Control type='text' name='name' placeholder='Enter pet name' required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid pet name.
                        </Form.Control.Feedback>
                        <Button variant='btn btn-dark btn-lg' type='submit'> Set Pet Name </Button>
                        <Button variant='btn btn-dark btn-lg' type='button' onClick={handleReset}> Reset </Button>
                    </div> 
                </Form.Group>
                    
            </Form>
            <div id='container'>
                <img src={Pet} alt='Pet'></img>
                <h2>Hello I'm <span id='pet'>{name}</span></h2>
            </div>
        </>
    )
}

export default App;
