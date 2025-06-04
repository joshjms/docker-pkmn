# Docker Workshop

## Exercise 1 - Exposing an HTTP Server

You have three Pokemon with you: Cottonee, Lillipup, and Tepig. You can check them under `pokedex/pokemon.json`. 

You also want to see them via your Pokedex which conveniently is a web application.

Inside `pokedex`, there is an empty Dockerfile. Make the Dockerfile and expose the server to port 5000. Open the endpoint `http://localhost:5000/pkmn` at your browser (Postman or curl also can). 

The expected output from the server is:

```
[
  {
    "image": "https://img.pokemondb.net/artwork/large/cottonee.jpg",
    "name": "Cottonee"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/lillipup.jpg",
    "name": "Lillipup"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/tepig.jpg",
    "name": "Tepig"
  }
]
```

