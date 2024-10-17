//http://www.omdbapi.com/?apikey=7a4561cc&t=star+wars


fetch ("http://www.omdbapi.com/?apikey=7a4561cc")
    .then(res => res.json())
    .then(data => console.log(data))