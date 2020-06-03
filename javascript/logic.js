
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
            let responseAPI = response.sprites.front_shiny;
            console.log("responseAPI", responseAPI)
            pokemon.innerHTML = `<Img class="imgPokemon" src="${responseAPI}"/>`;
        })

        .catch(error => alert("Erreur : " + error));
}



