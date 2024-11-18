// Obtener los elementos del DOM
const userInput = document.getElementById("search-input");
const fetchDataBtn = document.getElementById("search-button");
const outputDiv = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const wEight = document.getElementById("weight");
const heigHt = document.getElementById("height");
const tyPes = document.getElementById("types");
const poKeHd = document.getElementById("hp");
const pokeATack = document.getElementById("attack");
const pokeDEF = document.getElementById("defense");
const pokeSAta = document.getElementById("special-attack");
const pokeSDef = document.getElementById("special-defense");
const pokeSPeed = document.getElementById("speed"); 
const pContainer = document.getElementById('pokeContainer')

// Función que se ejecutará cuando se haga clic en el botón
fetchDataBtn.onclick = async function() {
  try {
    const pokeNameOrId = userInput.value.toLowerCase();
    const inputValue = userInput.value.trim();
   
    
     // Obtener el valor del input
    if (!inputValue) {
      outputDiv.innerText = 'Por favor ingrese un id o nombre de algun pokemon';
      return;
    }  else {

   


    }
    

    // Realizar la solicitud a la API con el valor del input como parámetro
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokeNameOrId}`);
    if (!response.ok) throw new Error && alert ("Pokémon not found");

    const data = await response.json();
    outputDiv.innerText = JSON.stringify(data, null, 2); // Mostrar datos en el div
  } catch (error) {
    console.error('Error:', error);
    outputDiv.innerText = `${error.message}`;
  }
};
