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
            list.textContent = "No movie with this title. try again!"
            //console.log("No movie with this title. try again!")
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
                                    <img class="moviePOster" src="${movie.Poster}" alt="movie Poster">
                                    <div>
                                        <div class="movieInfo1">
                                            <h2 class="movieTitle">${movie.Title}</h2>
                                            <h3 class="movieRate">${data.imdbRating}</h3>
                                        </div>
                                        <div class="movieInfo2">
                                            <span class="movieDuration">${data.Runtime}</span>
                                            <span class="movieType">${data.Genre}</span>
                                            <button class="addBtn">add to watch</button>
                                        </div>
                                        <p>${data.Plot}</p>
                                    </div>
                                </div>`
                               
                        list.innerHTML = movieList
                    
                    }) 
            })
            
        }
    })
})

//creare un altro fetch, che lavora su ogni singolo titolo attraverso il Filter.
