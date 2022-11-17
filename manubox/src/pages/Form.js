import React, { useState } from 'react';
import Header from '../components/Header';
import Autosuggest from '../components/Autosuggest';



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

    const [boxs, setBoxs] = useState([]);

   
    const [occupiedSurface, setOccupiedSurface] = useState(0);

   
    const [showForm , setShowForm] = useState(true);
    //comportements

    /**
     * handleSubmit permet de calculer la surface total
     * @param {event} event 
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        let total = 0;
        objects.map((object) => {
            const objectQuantity = object.quantity;
            const objectSurface = object.surface;
            parseFloat(objectSurface);
            total += (objectSurface * objectQuantity);
        })
        if(boxs.length == 0) {
            setOccupiedSurface(total);
        }
        handleResult(occupiedSurface);
    }

    /**
     * CreateObject permet d'ajouté un object dans le tableaux objects
     */
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

    /**
     * handleLess permet de diminuer la quantité de l'object cliqué 
     * @param {int} id 
     */
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

    /**
     * handleUp permet d'augmenté la quantité de l'object cliqué 
     * @param {int} id 
     */
    const handleUp = (id) => {
              
        // copie du state 
        const objectCopy = [...objects]

        // manipulation sur la copie du state         
        objectCopy[id]['quantity'] = objectCopy[id]['quantity']+1
        // modifier mon state avec le setter   
        setObjects(objectCopy)      
    }

    /**
     * handleDelete permet de suprimé l'object cliqué 
     * @param {int} id 
     */
    const handleDelete = (id) => {
        
        // copie du state 
        const objectsCopy = [...objects]

        // manipulation sur la copie du state 
        const objectsCopyUpdate = objectsCopy.filter(object => object.id !== id)

        // modifier mon state avec le setter 
        setObjects(objectsCopyUpdate)
    }

    /**
     * handleInputEntry permet de vérifier si un object ajouté est déja dans la liste si oui ne crée pas d'object mais on augmente la quantité
     * @param {event} event 
     */
    const handleInputEntry = (event) => {
        event.preventDefault();
        let isExists = false;
        let isSuggested = false;
        let id = 0;
        if(suggestions.includes(newObject)) {
            isSuggested = true;
            objects.map((object) => {
                if(object.name === newObject) {
                    isExists = true;
                    id = object.id;
                }
            })        
        }
        if(isExists === false && isSuggested === true) {
            CreateObject();
        }
        else if(isExists === true && isSuggested === true) {
            handleUp(id);
        }
        setnewObject('')
    }



    let boxsCopy = [...boxs];

    const handleResult = (occupiedSurface) => {
        if (occupiedSurface > 0) {
            while(occupiedSurface > 16) {
                let boxToPush = 'xl';

                // copie du state
                boxsCopy.push(boxToPush);
                setOccupiedSurface(occupiedSurface -= 16);
            }
            if (occupiedSurface <= 16) {
                push(occupiedSurface, boxsCopy);
                setOccupiedSurface(occupiedSurface = 0);
            }
        }
        
        // on remplace le vrai state

        setBoxs(boxsCopy);
        console.log(boxs);

    }


    const push = (surface, boxsCopy) => {

            
            let boxSize = "";
            if (surface <= 3) {
                boxSize = "s";
            }
            else if (surface <= 6) {
                boxSize = "m";
            }
            else if (surface <= 10) {
                boxSize = "l";
            }
            else {
                boxSize = "xl";
            }
            console.log(boxSize);

            boxsCopy.push(boxSize);
   
    }


    //affichage 
    return showForm ? (
        // Affichage Form
        <React.Fragment>
            <Header />
            <h1>Formulaire</h1>
            <form class='formulaire' action="submit">
                
                <div>
                    <label>veuillez indiquer les objets stockés : </label>
                    <Autosuggest newObject={newObject} setnewObject={setnewObject} suggestions={suggestions} />
                </div>
                <button class='btn1' onClick={handleInputEntry}>Suivant</button>
                <ul>
                {objects.map((object) => ( 
                        <li key={object.id}>
                            <button onClick={(event) => {event.preventDefault() ; handleLess(object.id)}}>-</button>
                                {object.quantity}
                            <button onClick={(event) => {event.preventDefault();handleUp(object.id)}}>+</button>
                                {object.name}  
                            <button class='btnsup' onClick={() =>handleDelete(object.id)}>X</button>
                        </li>
                ))}
                </ul>
                
                <button class='btn' onClick={handleSubmit}>Terminer</button>
            </form>
        </React.Fragment>      
    ) : (
        // Affichage Result
        <React.Fragment>
            <Header />
            <h1> resultat </h1>
            <p>pour stocker  </p>
            {/* {
            boxs.forEach((box) => (
                <p>{box['boxSize']}</p>
            ))
            } */}
            <button onClick={() => setShowForm(true)}>retour</button>
        </React.Fragment>
    )
};

export default Form;