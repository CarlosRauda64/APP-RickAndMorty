//Rick and Morty API
const endpoint = 'https://rickandmortyapi.com/api/character'

fetch(endpoint)
  .then( response => response.json() )
  .then(data => {
    const characters = data.results
    const charactersContainer = document.getElementById('app')
    //Map crea un nuevo array, dentro de el podemos recorrer todo
    //el array, en este caso recorremos "characters" y "character"
    //es la variable que almacena cada elemento del array
    characters.map(character => {
      const characterElement = document.createElement('div')
      characterElement.innerHTML = `
        <img src="${character.image}" alt="${character.name}-image">
        <h3>Name: ${character.name}</h3>
        <p>Status: ${character.status}</p>
        <p>Gender: ${character.gender}</p>
        <p>Species: ${character.species}</p>
      `
      charactersContainer.appendChild(characterElement)
    })
  })
  .catch((error) => {
    console.log(error)
    const charactersContainer = document.getElementById('app')
    charactersContainer.innerHTML = `<h1> API ERROR </h1>`
  })

