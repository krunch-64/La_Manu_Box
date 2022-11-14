import React, { useState } from 'react';
import Navigation from '../components/Navigation';

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
        const name = nameObject;
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
        const objectCopyUpdate = objectCopy[id-1].quantity
        console.log(objectCopyUpdate)
    
        
        setObjects(objectCopyUpdate)
    }

    const handleUp = (id) => {
        console.log(id)
    }



    const handleDelete = (id) => {
        
        // copie du state 
        const objectsCopy = [...objects]

        // manipulation sur la copie du state 
        const objectsCopyUpdate = objectsCopy.filter(object => object.id !== id)

        // modifier mon state avec le setter 
        setObjects(objectsCopyUpdate)
    }

    // la fonction handleChange permet de donner en temps reel les létres écrits par l'utlisateur dans le state newObject
    const handleChange = (event) => {
        setnameObject(event.target.value)
    }
    //affichage 
    return (
        <form action="submit">
            <h1>Fromulaire</h1>
            <div>
                <label>veuillez indiqué les objets stocker :</label>
                <input value={nameObject} type="text" placeholder='Ajouter un object... ' onChange={handleChange}></input>
            </div>
            <button onClick={NextObject}>Suivant</button>
            <ul>
                {objects.map((object) => (
                    <li key={object.id}><button onClick={() => handleLess(objects.id)}>-</button>{object.quantity}<button onClick={() => handleUp(object.id)}>+</button>  {object.name}  <button onClick={() =>handleDelete(object.id)}>X</button></li>
                ))}
            </ul>

            <button onClick={handleSubmit} >Terminer</button>
        </form>
        
    );
};

export default Form;