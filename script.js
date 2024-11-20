
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
 
 outputDiv.innerHTML = `
   #:${data.id}
   Nombre: ${data.name}
   Weight: ${data.weight}
   Height: ${data.height} 
  regular <img id="sprite" src="${data.sprites.front_default}">
  shiny <img id="sprite"  src="${data.sprites.front_shiny}" >
  
   `
        
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    pokeSAta.textContent = data.stats[3].base_stat;
    pokeSDef.textContent = data.stats[4].base_stat;
    pokeSPeed.textContent = data.stats[5].base_stat;

types.innerHTML = data.types
      .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
      .join('');
 
  } catch (error) {
    console.error('Error:', error);
    outputDiv.innerText = `${error.message}`;
  }
};
