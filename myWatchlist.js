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
const myArray = [];

// Funzione che viene eseguita quando l'array viene modificato
function onArrayChanged() {
  console.log('L\'array è stato modificato:', myArray);
}

// Funzione per aggiungere un elemento all'array e inviare l'evento
function addElement(element) {
  myArray.push(element);
  // Simulazione di un evento personalizzato
  const event = new Event('arrayChanged');
  window.dispatchEvent(event);
}

// Registra il listener per l'evento
window.addEventListener('arrayChanged', onArrayChanged);

// Aggiungi un elemento per testare
addElement('nuovo elemento');
*/