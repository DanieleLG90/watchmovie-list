const titleImput = document.getElementById("titleImput")
const srcBtn = document.getElementById("srcBtn")
const list = document.getElementById("list")

/*
fetch ("http://www.omdbapi.com/?t=star+wars&type=movie&apikey=7a4561cc")
    .then(res => res.json())
    .then(data => console.log(data))
*/

srcBtn.addEventListener('click', function(){
    fetch (`https://www.omdbapi.com/?s=${titleImput.value}&type=movie&apikey=7a4561cc`)
    .then(res => res.json())
    .then(data => {

        const movieListArray = data.Search
        
        if(data.Response === 'False'){
            list.innerHTML = `<h3 class="noResultMsg">No movie with this title. try again!</h3>`
        
        } else{
            //console.log(movieListArray)
            let movieList =''
            movieListArray.forEach(movie =>{
                fetch(`https://www.omdbapi.com/?t=${movie.Title}&type=movie&apikey=7a4561cc`)
                    .then(res => res.json())
                    .then(data =>{
                        console.log(data)
                        
                        movieList += `  
                                <div class="movieCard">
                                    <img class="moviePoster" src="${data.Poster}" alt="movie Poster">
                                    <div class="infoContainer">
                                        <div class="movieInfo1">
                                            <h2 class="movieTitle">${data.Title}</h2>
                                            <h3 class="movieRate">${data.imdbRating}</h3>
                                        </div>
                                        <div class="movieInfo2">
                                            <div class="movieStyleContainer">
                                                <span class="movieDuration">${data.Runtime}</span>
                                                <span class="movieType">${data.Genre}</span>
                                            </div>
                                            <button class="addBtn"><img class="addMovieImg" src="movies-add.svg" alt="">Watchlist</button>
                                        </div>
                                        <p class="plot">${data.Plot}</p>
                                    </div>
                                </div>`
                               
                        list.innerHTML = movieList
                    
                    }) 
            })
            
        }
    })
})


