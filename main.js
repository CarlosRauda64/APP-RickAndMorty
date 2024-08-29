import './style.css'
document.getElementById('app').innerHTML = `
  <h1 class="title">RICK AND MORTY APP - CARLOS RAUDA<h1>
  <section id="character-container"></section>
`

//Rick and Morty API
const endpoint = 'https://rickandmortyapi.com/api/character'

//ASYNC-AWAIT
const getCharacter = async () => {
  try {
    //Al agregar awit indicamos que esta operacion lleva tiempo
    //Fetch se utiliza para realizar solicitudes HTTP de manera asíncrona
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data.results)
    const characters = data.results
    const container = document.getElementById('character-container')
    characters.map(character => {
      container.innerHTML += `
        <div class="card">
          <img src="${character.image}" alt="${character.name}-img">
          <h3 class="card-title">Name: ${character.name}</h3>
          <p class="card-species">Species: ${character.species}</p>
          <p class="card-gender">Gender: ${character.gender}</p>
          <p class="card-status">Status: ${character.status}</p>
        </div>
      `
    })
  } catch (error) {
    console.log(error)
  }
}

getCharacter()