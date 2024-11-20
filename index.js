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

list.addEventListener('click', function(e){
  if (e.target.classList.contains('addBtn')){
    console.log(e.target.dataset.movieTitle)
    //const Title = e.target
  }
})
/*
function displayMovie(movieListed) {
    let movieList = '';
  
    movieListed.forEach(movie => {
      fetch(`https://www.omdbapi.com/?t=${movie.Title}&type=movie&apikey=7a4561cc`)
        .then(res => res.json())
        .then(data => {
          movieList += `
            <div class="movieCard">
              <img class="moviePoster" src="${data.Poster}" alt="movie Poster">
              <div class="infoContainer">
                <button class="addBtn" data-movie-title="${data.Title}">
                  <img class="addMovieImg" src="movies-add.svg" alt="">Watchlist
                </button>
                </div>
            </div>
          `;
        });
    });
  
    // Add event listener to the container element (replace 'list' with your container ID)
    document.getElementById('list').addEventListener('click', (event) => {
      if (event.target.classList.contains('addBtn')) {
        const movieTitle = event.target.dataset.movieTitle;
        myFunction(movieTitle);
      }
    });
  }
  
  function myFunction(movie) {
    console.log(movie);
  }
    */