const list = document.getElementById("list")
let movieTitlesArray = JSON.parse(localStorage.getItem('movieTitlesArray'))

console.log(movieTitlesArray)

displayMovie()

function displayMovie(){
    let movieList =''

    movieTitlesArray.forEach(movie =>{
        fetch(`https://www.omdbapi.com/?t=${movie}&type=movie&apikey=7a4561cc`)
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
                                        <span class="movieDuration">${data.Runtime}</span>
                                        <span class="movieType">${data.Genre}</span>
                                    </div>
                                    <button class="addBtn removeBtn" data-movie-title='${data.Title}' >
                                      <img class="addMovieImg" src="movies-delete.svg" alt="">Remove
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

    if (e.target.classList.contains('removeBtn')){
      //console.log(e.target.dataset.movieTitle)
      let movieToRemove = e.target.dataset.movieTitle
      const movieIndex = movieTitlesArray.indexOf(movieToRemove)

      
        movieTitlesArray.splice(movieIndex, 1);
        localStorage.setItem('movieTitlesArray', JSON.stringify(movieTitlesArray))
        displayMovie()
      
    }
})

/*

funzione per andare a selezionare ed eliminare il film selezionato.
nella funzione andrà richiamata la funzione con il display dei film?

const fruits = ['mela', 'banana', 'pera', 'arancia'];
const fruitToRemove = 'pera';

// Trova l'indice dell'elemento da rimuovere
const index = fruits.indexOf(fruitToRemove);

// Rimuovi l'elemento utilizzando splice()
if (index !== -1) {
    fruits.splice(index, 1);
}

console.log(fruits); // Output: ['mela', 'banana', 'arancia']
*/
