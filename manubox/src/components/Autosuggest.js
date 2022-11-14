import React from 'react';
import {useState, useRef} from 'react';


export default function Autosuggest() {

    // state
    const suggestions = ['Frigo', 'Lit', 'Table'];
    const [isFocused, setIsFocused] = useState(false);
    const[isHovered, setIsHovered] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef();

    // comportements

    // render


    return(
        <React.Fragment>
            <form action="">
                <input type="text" className='input'
                 placeholder="Nom de l'objet" value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
                 onFocus={() => setIsFocused(true)} onBlur={() => {
                    if (!isHovered) {
                        setIsFocused(false)
                    }
                 }} ref={inputRef}></input>
            </form>
            {isFocused &&
                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {suggestions.map((suggestion, index) => {
                const isMatch = suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
                return (
                        <div key={index}>
                            {isMatch &&
                                <div className="suggestion" onClick={() => {
                                    setInputValue(suggestion);
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