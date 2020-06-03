
let pokemon = document.getElementById('pokemon'); //get the div that display the image of the pokemon
let pokeValeur = ''; // recupère la valeur tapée par l'utilisateur


//action du bouton rechercher 
let searchButton = document.getElementById('searchButton');
//va déclancher la fonction getInputValue suite à un clic
searchButton.addEventListener('click', function () {
    getInputValue();
    pokemonData(pokeValeur)
})

//Attribut la valeur du champ de recherche à pokeValeur
function getInputValue() {
    let searchValue = document.getElementById('search').value;
    pokeValeur = searchValue;
    console.log(searchValue, 'searchValue');
    return (
        pokeValeur
    );
}


//va taper L'APi
let pokemonData = (value) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(response => response.json())
        .then(response => {
            let responseImage = response.sprites.front_shiny;
            console.log('base response', response)
            let responseName = response.name;
            pokemon.innerHTML =
                `
                <span class="name">${responseName.toUpperCase()}</span> 
                <Img class="imgPokemon" src="${responseImage}"/> 
                `;
            console.log(responseName);
        })

        .catch(error => {
            pokemon.innerHTML = `<p class="welcome" >Sorry <br/> your request didn't match anything we know  <br/>... </p>`
            console.log(("Erreur : " + error))
        });
}



