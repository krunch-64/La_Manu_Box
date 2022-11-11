import React from 'react';

const Search = () => {
    return (
        <form id="all-object" method="post" className="">
            <div className="">
                <label>veuillez indiquer les objets à stocker :</label>
                <input type="text" className="search d-inline-flex " name="search" value="Rechercher..." onfocus="if(this.value=='Rechercher...')this.value=''" onblur="if(this.value=='')this.value='Rechercher...'" autocomplete="off"/>
            </div>
            <button className="btn-primary">Suivant</button>
            <div className="">
    
            </div>
            <div id="">
                <p>surface : <span>0</span></p>
                <p>box : <span>1 box S , 1 box M</span></p>
                <p>prix : <span>0</span></p>
            </div>
            
            <button onclick="" className="btn-primary">Terminer</button>
        </form>
    )
}

export default Search;