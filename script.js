// Obtener los elementos del DOM
const userInput = document.getElementById('search-input');
const fetchDataBtn = document.getElementById('search-button');
const outputDiv = document.getElementById('pokemon-name');
const pokeId = document.getElementById('pokemon-id');

// Función que se ejecutará cuando se haga clic en el botón
fetchDataBtn.onclick = async function() {
  try {
    const pokeNameOrId = userInput.value.toLowerCase();
    const inputValue = userInput.value.trim();
    
    
     // Obtener el valor del input
    if (!inputValue ) {
      outputDiv.innerText = 'Por favor ingrese un valor',
      pokeId.innerText = "id";
      return;
    }

    // Realizar la solicitud a la API con el valor del input como parámetro
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokeNameOrId}`);
    if (!response.ok) throw new Error && alert("Pokémon not found");

    const data = await response.json();
    outputDiv.innerText = JSON.stringify(data, null, 2); // Mostrar datos en el div
  } catch (error) {
    console.error('Error:', error);
    outputDiv.innerText = `${error.message}`;
  }
};