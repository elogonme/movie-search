
$(document).ready(() => {
    var searchText = prompt('What movie to look for?')
    getMovies(searchText);

    $('#searchForm').on('submit', (e) => {
        e.preventDefault();
        let searchText = $('#searchText').val();
        getMovies(searchText);
    });
});


function getMovies(searchText){
    fetch('http://omdbapi.com/?apikey=aa776520&s=' + searchText)
    .then(function (response) {
        console.log(response);
        if (response.status === 200){
            console.log("success");
            return response.json();
        }  else {
            console.log(response);
        }

    }).then(function (data) {



        console.log(data);
        let movies = data;
        let output = '';
        document.getElementById("movies").textContent= JSON.stringify(movies);

            
        });
        

}
