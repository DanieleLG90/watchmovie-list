const titleImput = document.getElementById("titleImput")
const srcBtn = document.getElementById("srcBtn")

/*
fetch ("http://www.omdbapi.com/?t=star+wars&type=movie&apikey=7a4561cc")
    .then(res => res.json())
    .then(data => console.log(data))
*/

srcBtn.addEventListener('click', function(){
    fetch (`http://www.omdbapi.com/?s=${titleImput.value}&type=movie&apikey=7a4561cc`)
    .then(res => res.json())
    .then(data => {

        const movieListArray = data.Search
        let movieList = ""
        
        if(data.Response === 'False'){
            console.log("No movie with this title. try again!")
        } else{
            console.log(movieListArray)
            movieListArray.filter(listMovieFilter(movie))
        }
    })
    function listMovieFilter (movie){
        movieList += ``
        console.log('working')
    }
    
})


