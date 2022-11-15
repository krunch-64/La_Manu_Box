import React from 'react';
import {useState, useRef} from 'react';


export default function Autosuggest({newObject,setnewObject,suggestions}) {

    // state
    const [isFocused, setIsFocused] = useState(false);
    const[isHovered, setIsHovered] = useState(false);
    const [inputValue, setInputValue] = useState("");
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
                 }} ref={inputRef}></input>
            
            {isFocused &&
                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {suggestions.map((suggestion, index) => {
                const isMatch = suggestion.toLowerCase().indexOf(newObject.toLowerCase()) > -1;
                return (
                        <div key={index}>
                            {isMatch &&
                                <div className="suggestion" onClick={() => {
                                    setnewObject(suggestion);
                                    // inputRef.current.focus;
                                }}>{suggestion}</div>
                            }
                        </div>
                )
                })}
                </div>
            } 
        </React.Fragment>
        
    )

}