import React from 'react';
import Navigation from '../components/Navigation';

const Form_Main = () => {
    return (
        <Navigation />,
            <form id="all-object" method="post" class="">
                <div class="">
                    <label>veuillez indiqué les objets stocker :</label>
                    <input type="text" class="search d-inline-flex " name="search" value="Rechercher..." onfocus="if(this.value=='Rechercher...')this.value=''" onblur="if(this.value=='')this.value='Rechercher...'" autocomplete="off"/>
                </div>
          <button class="btn-primary">Suivant</button>
          <div class="">
        
          </div>
          <div id="">
              <p>surface : <span>0</span></p>
              <p>box : <span>1 box S , 1 box M</span></p>
              <p>prix : <span>0</span></p>
          </div>
        
          <button onclick="" class="btn-primary">Terminer</button>
      </form>
          
    );
};

export default Form_Main;