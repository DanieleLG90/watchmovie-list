const titleImput = document.getElementById("titleImput")
const srcBtn = document.getElementById("srcBtn")
const list = document.getElementById("list")

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
        
        if(data.Response === 'False'){
            list.textContent = "No movie with this title. try again!"
            //console.log("No movie with this title. try again!")
        } else{
            //console.log(movieListArray)
            let movieList =''
            movieListArray.forEach(movie =>{
                fetch(`http://www.omdbapi.com/?t=${movie.Title}&type=movie&apikey=7a4561cc`)
                    .then(res => res.json())
                    .then(data =>{
                        movieList += `<img src="${movie.Poster}" alt="">`
                        list.innerHTML = movieList
                    
                    }) 
            })
            
        }
    })
})

//creare un altro fetch, che lavora su ogni singolo titolo attraverso il Filter.
