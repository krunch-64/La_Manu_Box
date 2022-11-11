window.onload = function(){
	var motsClefs = [
		'maxime',
		'rodson',
		'K',
		'simpon',
		'Bob',
		'Boby',
		'Bobu',
		'you are'
	];
	
	var form = document.getElementById("all-object");
	var input = form.search;
	
	var list = document.createElement("ul");
	list.className = "suggestions";
	list.style.display = "none";

	form.appendChild(list);

	input.onkeyup = function(){
		var txt = this.value;
		if(!txt){
			list.style.display = "none";
		    return;
		}
		
		var suggestions = 0;
		var frag = document.createDocumentFragment();
		
		for(var i = 0, c = motsClefs.length; i < c; i++){
			if(new RegExp("^"+txt,"i").test(motsClefs[i])){
				var word = document.createElement("li");
				frag.appendChild(word);
				word.innerHTML = motsClefs[i].replace(new RegExp("^("+txt+")","i"),"<strong>$1</strong>");
				word.mot = motsClefs[i];
				word.onmousedown = function(){					
					input.focus();
					input.value = this.mot;
					list.style.display = "none";
					return false;
				};				
				suggestions++;
			}
		}

		if(suggestions){
			list.innerHTML = "";
			list.appendChild(frag);
			list.style.display = "block";
		}
		else {
			list.style.display = "none";			
		}
	};

	input.onblur = function(){
		list.style.display = "none";	
	};
};

// tableau contenant les données sur les objects

let furnitures = {
    "frigo": [
        {
            "longueur": 0.55,
            "largeur": 0.55,
            "hauteur": 1.80
        } 
    ],
    "canape" : [
        {
            "longueur": 2,
            "largeur": 0.5,
            "hauteur": 0.5
        }
    ]
};


// je déclare dans des constantes les valeurs en m2 pour chaque taille de box

const boxS = 3;
const boxM = 6;
const boxL = 10;
const boxXl = 16;


function calcul(longueur, largeur) {
    surface = longueur * largeur;
    console.log(surface);
}

const ul = document.querySelector('ul');
for (const furniture in furnitures) {
    let li = `<li>${furniture} </li>`;
    ul.innerHTML = li;
}