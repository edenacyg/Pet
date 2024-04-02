import { useEffect, useState } from 'react'; 
import { Button, Form } from 'react-bootstrap';
import Pet from './assets/images/pet.gif';

function App() {
    const savedName = window.localStorage.getItem('name');
    const [name, setName] = useState(savedName); 

    useEffect(() => {
        window.localStorage.setItem('name', name);
    }, [name]); 

    const handleSetName = (e) => { 
        e.preventDefault();
        const newName = e.target.elements.name.value; 
        setName(newName); 
        e.target.elements.name.value = '';
    }

    const handleReset = () => {
        setName(''); 
    }

    return (
        <>
            <h1>My Pet</h1>
            <Form onSubmit={handleSetName}>
                <Form.Group controlId='formBasicEmail'>
                    <div className='namefield'>
                        <Form.Control type='text' name='name' placeholder='Enter pet name'/>
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
