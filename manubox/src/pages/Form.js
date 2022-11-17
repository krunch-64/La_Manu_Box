import React, { useState } from 'react';
import Header from '../components/Header';
import Autosuggest from '../components/Autosuggest';
import Button from '../components/Button';



const Form = () => {


    // state (état, données)

    const [id, setId] = useState(0)

    const [newObject, setnewObject] = useState("");

    const [objects, setObjects] = useState([])

    const suggestions = ['Frigo', 'Lit', 'Table','Petit_carton','Moyen_carton','Grand_carton'];

    const surfacesObject = {
        Frigo: 2,
        Lit: 3,
        Table: 5,
        Petit_carton: 0.25,
        Moyen_carton: 0.5,
        Grand_carton: 1,
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
                let boxToPush = 'XL';
                let boxPrice = 200;
                

                // copie du state
                boxsCopy.push({boxSize: boxToPush,id:randomIntFromInterval(100,200),price:boxPrice});
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
        if(boxs.length > 0){
            setShowForm(false);
        } 
    }


    const push = (surface, boxsCopy) => {

            
            let boxSize = "";
            let boxPrice = 0;
            if (surface <= 3) {
                boxSize = "S";
                boxPrice = 50;
            }
            else if (surface <= 6) {
                boxSize = "M";
                boxPrice = 80;
            }
            else if (surface <= 10) {
                boxSize = "L";
                boxPrice = 140;
            }
            else {
                boxSize = "XL";
                boxPrice = 200;
            }
            console.log(boxSize);
            boxsCopy.push({boxSize: boxSize,id:randomIntFromInterval(0,99),price:boxPrice});
   
    }

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max-min + 1)+ min)
    }

    const getPriceForAllBox = () => {
        let priceAllBox = 0 ;
        {boxs.map((box) => {
            priceAllBox += box.price;
        })}
        return priceAllBox;
    }

    const restart = () => {
        setBoxs([]);
        setShowForm(true);
    }

    //affichage 
    return showForm ? (
        // Affichage Form
        <React.Fragment>
            <Header />
            <h1>Nous estimons pour vous la formule de location adaptée à vos besoins !</h1>
            <form className='formulaire' action="submit">
                
                <div className='form_container'>
                    <label>Rentrez les objets à stocker </label>
                    <Autosuggest newObject={newObject} setnewObject={setnewObject} suggestions={suggestions} />
                </div>
                <ul>
                {objects.map((object) => ( 
                        <li className="quantity-li" key={object.id}>
                            <button  className='btn-quantity' onClick={(event) => {event.preventDefault() ; handleLess(object.id)}}>  -  </button>
                                {object.quantity}
                            <button  className='btn-quantity'onClick={(event) => {event.preventDefault();handleUp(object.id)}}>  +  </button>
                                {object.name}  
                            <button className='btnsup' onClick={() =>handleDelete(object.id)}>  x  </button>
                        </li>
                ))}
                </ul>
                <div className='buttons'>
                    <button className='btn1' onClick={handleInputEntry}>Suivant</button>     
                    <button className='btn' onClick={handleSubmit}>Terminer</button>
                </div>
             
            </form>
        </React.Fragment>      
    ) : (
        // Affichage Result
        <React.Fragment>
            <Header />
            <h1> Estimation </h1>
            <div className="result">
                <p className="title-result">Pour tout stocker, il vous faudra {boxs.length} box(s) : </p>
                <div className="boxs_container">
                    {
                    boxs.map((box) => (
                        <div className="box" key={box.id}>{box.boxSize}</div>

                    ))
                    }
                </div>
                <p>Prix : {getPriceForAllBox()} € / mois</p>
                <div class="down-of-result">
                    <Button  className="btn" text="Retour" event={restart}/>
                    <Button text="Commander" className="btn1" />
                </div>
                
            </div>
            
        </React.Fragment>
    )
};

export default Form;