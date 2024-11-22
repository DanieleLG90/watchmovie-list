const list = document.getElementById("list")
let movieTitlesArray = JSON.parse(localStorage.getItem('movieTitlesArray'))

console.log(movieTitlesArray)

displayMovie()

function displayMovie(){
    let movieList =''

    movieTitlesArray.forEach(movieT =>{
        fetch(`https://www.omdbapi.com/?t=${movieT.Title}&type=movie&apikey=7a4561cc`)
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
                                    <button class="addBtn" data-movie-title='${data.Title}' >
                                      <img class="addMovieImg" src="movies-add.svg" alt="">Watchlist
                                    </button>
                                </div>
                                <p class="plot">${data.Plot}</p>
                            </div>
                        </div>`
                       
                list.innerHTML = movieList

            }) 
            
    }) 
}

