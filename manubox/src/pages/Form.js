import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Autosuggest from '../components/Autosuggest';


const Form = () => {
    // state (état, données)
    const [id, setId] = useState(0)

    const [nameObject, setnameObject] = useState("");

    const [objects, setObjects] = useState([])

    //comportements


    const handleSubmit = (event) => {
        event.preventDefault()
        
    }

    const NextObject = (event) => {
        event.preventDefault()
        
        // copie du state
        const objectsCopy = [...objects]
        
        // manipulation sur la copie du state
        const name = event.target.value;
        setId(id+1)
        objectsCopy.push({id: id, name: name ,quantity: 1})
        // modifier le state avec le setter 
        setObjects(objectsCopy)
        setnameObject('')

    }

    const handleLess = (id) => {
        
        // copie du state 
        const objectCopy = [...objects]
        // manipulation sur la copie du state         
        

            if (objectCopy[id]['quantity'] < 1 ) {
                objectCopy[id]['quantity'] = objectCopy[id]['quantity'] - 1
            }
        
            // modifier mon state avec le setter   

            setObjects(objectCopy) 
            console.log(objectCopyUpdateQuantity)     
    }

    const handleUp = (id) => {
              
        // copie du state 
        const objectCopy = [...objects]

        // manipulation sur la copie du state 
        // on récupere le quantité d'un object précis grace a l'id 
        const objectCopyUpdateQuantity = objectCopy[id]['quantity']+1
        
        objectCopy[id]['quantity'] = objectCopyUpdateQuantity
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

    // la fonction handleChange permet de donner en temps reel les létres écrits par l'utlisateur dans le state nameObject
    const handleChange = (event) => {
        setnameObject(event.target.value)
    }
    //affichage 
    return (
        <React.Fragment>
            <Header />
            <form action="submit">
                <h1>Formulaire</h1>
                <div>
                    <label>veuillez indiquer les objets stockés : </label>
                    <Autosuggest />
                </div>
                <button onClick={NextObject}>Suivant</button>
                <ul>
                    {objects.map((object) => (
                        <li key={object.id}><button onClick={(event) => {event.preventDefault() ;handleLess(objects.id)}}>-</button>{object.quantity}<button onClick={(event) => {event.preventDefault();handleUp(object.id)}}>+</button>  {object.name}  <button onClick={() =>handleDelete(object.id)}>X</button></li>
                    ))}
                </ul>

                {objects.map((object) => (
                    <button onClick={(event) => {event.preventDefault() ; handleLess(object.id)}} >test</button>
                ))}
                
                <button onClick={handleSubmit} >Terminer</button>
            </form>
        </React.Fragment>      
    );
};

export default Form;