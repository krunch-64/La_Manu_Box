import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Autosuggest from '../components/Autosuggest';
import Result from '../components/Result';


const Form = () => {


    // state (état, données)


    const [id, setId] = useState(0)

    const [newObject, setnewObject] = useState("");

    const [objects, setObjects] = useState([])

    const suggestions = ['Frigo', 'Lit', 'Table'];

    const surfacesObject = {
        Frigo: 2,
        Lit: 3,
        Table: 5
    }


    const [occupiedSurface, setOccupiedSurface] = useState(0);


    //comportements


    const handleSubmit = (event) => {
        event.preventDefault();
        let total = 0;
        objects.map((object) => {
            const objectQuantity = object.quantity;
            const objectSurface = object.surface;
            parseFloat(objectSurface);
            total += (objectSurface * objectQuantity);
        })
        setOccupiedSurface(total);
        console.log(occupiedSurface);
        
    }

    const CreateObject = () => {
        
        // copie du state
        const objectsCopy = [...objects]
        
        // manipulation sur la copie du state
        const name = newObject;
        setId(id+1)
        const surface = surfacesObject[name];
        objectsCopy.push({id: id, name: name ,quantity: 1, surface: surface})
        // modifier le state avec le setter 
        setObjects(objectsCopy)
        setnewObject('');
    }

    const handleLess = (id) => {
        
        // copie du state 
        const objectCopy = [...objects]

        // manipulation sur la copie du state         
        if (objectCopy[id].quantity > 1 ) {
            const value = objectCopy[id].quantity-1
            objectCopy[id].quantity = value
        }
        
        // modifier mon state avec le setter   

        setObjects(objectCopy)   
    }

    const handleUp = (id) => {
              
        // copie du state 
        const objectCopy = [...objects]

        // manipulation sur la copie du state         
        objectCopy[id]['quantity'] = objectCopy[id]['quantity']+1
        // modifier mon state avec le setter   
        setObjects(objectCopy)      
    }


    const handleDelete = (id) => {
        
        // copie du state 
        const objectsCopy = [...objects]

        // manipulation sur la copie du state 
        const objectsCopyUpdate = objectsCopy.filter(object => object.id !== id)

        // modifier mon state avec le setter 
        setObjects(objectsCopyUpdate)
    }

    const handleInputEntry = (event) => {
        event.preventDefault();
        let isExists = false;
        let isSuggested = false;
        let id = 0;
        if(suggestions.includes(newObject)) {
            isSuggested = true;
            objects.map((object) => {
                if(object.name == newObject) {
                    isExists = true;
                    id = object.id;
                }
            })        
        }
        if(isExists == false && isSuggested == true) {
            CreateObject();
        }
        else if(isExists == true && isSuggested == true) {
            handleUp(id);
        }
    }

    //affichage 
    return (
        <React.Fragment>
            <Header />
            <form action="submit">
                <h1>Formulaire</h1>
                <div>
                    <label>veuillez indiquer les objets stockés : </label>
                    <Autosuggest newObject={newObject} setnewObject={setnewObject} suggestions={suggestions} />
                </div>
                <button onClick={handleInputEntry}>Suivant</button>
                <ul>
                {objects.map((object) => ( 
                        <li key={object.id}>
                            <button onClick={(event) => {event.preventDefault() ; handleLess(object.id)}}>-</button>
                                {object.quantity}
                            <button onClick={(event) => {event.preventDefault();handleUp(object.id)}}>+</button>
                                {object.name}  
                            <button onClick={() =>handleDelete(object.id)}>X</button>
                        </li>
                ))}
                </ul>
                
                <button onClick={handleSubmit} >Terminer</button>
            </form>
        </React.Fragment>      
    );
};

export default Form;