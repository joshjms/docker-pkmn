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

## Exercise 2 - The Client

Now that we have an HTTP Server ready, we want to deploy our client application as well. 

Under `client`, we have the web application ready - you can start it too.

```bash
npm install
npm start
```

Now, we want to make a Docker container for it. Don't forget to pass the environment variable.

Around here, it actually doesn't seem to work.

## Exercise 3 - Putting it all Together

This is a bit difficult - it's okay if you can't do this yet. 

Now that you have your Pokedex web application and the HTTP server running together, now we want them as two services in a Docker Compose setup. There is an empty `docker-compose.yaml` at the root directory. There are several things to note here but you will get there when you get there. 

