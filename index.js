const titleImput = document.getElementById("titleImput")
const srcBtn = document.getElementById("srcBtn")
const list = document.getElementById("list")



srcBtn.addEventListener('click', function(){
    fetch (`https://www.omdbapi.com/?s=${titleImput.value}&type=movie&apikey=7a4561cc`)
    .then(res => res.json())
    .then(data => {
        
        const movieListArray = data.Search
        
        if(data.Response === 'False'){
            list.innerHTML = `<h3 class="noResultMsg">No movie with this title. try again!</h3>`
        
        } else{
            displayMovie(movieListArray)
        }
    })
 
})


function displayMovie(movieListed){

    let movieList =''
    movieListed.forEach(movie =>{
        fetch(`https://www.omdbapi.com/?t=${movie.Title}&type=movie&apikey=7a4561cc`)
            .then(res => res.json())
            .then(data =>{
                //console.log(data)
                
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
                                        <p class="movieDuration">${data.Runtime}</p>
                                        <p class="movieType">${data.Genre}</p>
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

// function to create an array in the local storage, checking if already exist one.

let movieTitlesArray = JSON.parse(localStorage.getItem('movieTitlesArray'))

if(!movieTitlesArray){
    movieTitlesArray = []
    localStorage.setItem('movieTitlesArray', JSON.stringify(movieTitlesArray))
}
// addeventlistener for the addbutton click
list.addEventListener('click', function(e){
  if (e.target.classList.contains('addBtn')){
    console.log(e.target.dataset.movieTitle)
    let titleToAdd = e.target.dataset.movieTitle
    addingMovieToArray(titleToAdd)
    console.log(movieTitlesArray)
  }
})
// functioin to push the title in the array and the array back in the localstorage
function addingMovieToArray (movieT){
    if(!movieTitlesArray.includes(movieT)){
        movieTitlesArray.push(movieT)
        localStorage.setItem('movieTitlesArray', JSON.stringify(movieTitlesArray))
    }
}
