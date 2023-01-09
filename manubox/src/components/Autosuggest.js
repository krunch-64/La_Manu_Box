import React from 'react';
import {useState, useRef} from 'react';


export default function Autosuggest({newObject,setnewObject,suggestions}) {

    // state
    const [isFocused, setIsFocused] = useState(false);
    const[isHovered, setIsHovered] = useState(false);
    const inputRef = useRef();

    // comportements

  

    // render


    return(
        <React.Fragment>
            
                <input type="text" className='input'
                 placeholder="Nom de l'objet" value={newObject} onChange={(e) => setnewObject(e.target.value)} 
                 onFocus={() => setIsFocused(true)} onBlur={() => {
                    if (!isHovered) {
                        setIsFocused(false)
                    }
                 }}></input>
            
            {isFocused &&
                <div className="suggestions" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {suggestions.map((suggestion, index) => {
                const isMatch = suggestion.toLowerCase().indexOf(newObject.toLowerCase()) > -1;
                return (
                        <React.Fragment key={index}>
                            {isMatch &&
                                <div className="suggestion" onClick={() => {
                                    setnewObject(suggestion);
                                }}>{suggestion}</div>
                            }
                        </React.Fragment>
                )
                })}
                </div>
            } 
        </React.Fragment>
        
    )

}