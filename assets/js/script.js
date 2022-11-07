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