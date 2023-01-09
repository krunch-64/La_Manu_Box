import React from "react";

export default function Button({text, className, event}) 
{
    return (
        <button className={className} onClick={event}>{text}</button>
    )
  
}