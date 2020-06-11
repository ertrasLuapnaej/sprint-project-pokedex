
let pokemon = document.getElementById('pokemon'); 
let switchButton = document.getElementById('switchButton');
let pokeValeur = ''; // recupère la valeur tapée par l'utilisateur
let pokeID = ''; //id renvoyé par l'api pour le pokemon sélectionné 
let searchField = document.getElementById('searchField');
let randomizer = document.getElementById('randomizer');
////////GESTION DU SWITCH SHINY/ BASIC//////////////////////////////////////////////////////////

let isDefault = '';
let isShiny = '';
let skinValue = isDefault;
let isSwitched = false;

const switchStatus =()=>{
    isSwitched = !isSwitched;
    pokemonData(pokeValeur)
    return(isSwitched)
}

//appelé dans pokemon data -> change l'URL de l'image  et le nom du bouton  
const colorManager=()=>{
    if(isSwitched == false){
        skinValue = isDefault;
        switchButton.innerText = `Basic`
    }else{
        skinValue = isShiny;
        switchButton.innerText = `Shiny`
    }
        return(
            skinValue
        )
    }
///////////////////////////////////////////////////////////////////////////////////////////////

//action du bouton rechercher 
let searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function () {
    getInputValue();
    pokemonData(pokeValeur)
})

//en appuyant sur entrer ça fait comme "search"  ... youpi 
searchField.addEventListener('keypress', function(e){
let key = e.which || e.keyCode || 0;
if ( key === 13){
    getInputValue();
    pokemonData(pokeValeur)
}
})

//Attribut la valeur du champs de recherche à pokeValeur
function getInputValue() {
    let searchValue = document.getElementById('search').value;
    pokeValeur = searchValue;
    return (
        pokeValeur
    );
}


//logique des chevrons

const chevronRight=()=>{
    pokeID ++;
    pokeValeur = pokeID;
    pokemonData(pokeValeur);
}

const chevronLeft =()=>{
    pokeID --;
    pokeValeur = pokeID;
    pokemonData(pokeValeur);
}

const fireRandomizer =()=>{
let getRandom = () => {
    return(Math.floor( Math.random()*800) );
}
pokeValeur=getRandom();
pokemonData(pokeValeur)
}



//va taper L'APi
let pokemonData = (value) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(response => response.json())
        .then(response => {
            isDefault = response.sprites.front_default;
            console.log(response)
            isShiny = response.sprites.front_shiny;
            pokeID = response.id;
            colorManager();
            let responseName = response.name;
            let type1 = response.types[0].type.name;
            // let type2 = response.types[1].type.name;
            console.log(type1)
            pokemon.innerHTML =
                `
                <span class="name">#${pokeID} ${responseName.toUpperCase()}</span> 
                <Img class="imgPokemon" src="${skinValue}"/> 
                <span class="type" > Type: ${type1} </span>

                `;
        })

        .catch(error => {
            pokemon.innerHTML = `<p class="welcome" >Sorry <br/> your request didn't match anything we know  <br/>... </p>`
            console.log(("Erreur : " + error))
        });
}



