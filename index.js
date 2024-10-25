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
        //console.log(data.Response)
        const movieListArray = data.Search
        //console.log(movieListArray)
        if(data.Response === 'False'){
            console.log("No movie with this title. try again!")
        } else{
            console.log(movieListArray)
            let movieList = ""
            movieListArray.filter(movie =>{
                movieList += ``
            })
        }
    })
})
