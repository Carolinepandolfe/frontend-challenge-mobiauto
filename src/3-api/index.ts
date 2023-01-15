import axios from 'axios';

type ResponseProps = {
  results: {
    name: string,
    gender: string,
    image: string,
    species: string
  }[]
}

const selectedCharacter = ['Rick Sanchez','Morty Smith','Summer Smith','Beth Smith','Jerry Smith']

const translate: Record<string, string> = {
  Male: 'Masculino',
  Human: 'Humano',
  Female: 'Feminino'
}


const getRickAndMortyCharacters = async () => {
  try {
    const response = await axios.get<ResponseProps>('https://rickandmortyapi.com/api/character')
    const characters =  response.data.results.map((item) => {
      return {
        nome: item.name,
        genero: translate[item.gender],
        avatar: item.image,
        especie: translate[item.species]
      }
    }).filter((item) => selectedCharacter.includes(item.nome))

    console.log(characters)
    
  }catch(error){
    console.log(error)
  }
}

getRickAndMortyCharacters()