
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();

    });
});


function getMovies(searchText){
    fetch('http://omdbapi.com/?apikey=aa776520&s=' + searchText)
    .then(function (response) {
        console.log(response);
        if (response.status === 200){
            console.log("success");
        }  return response.json();
    }).then(function (data) {



        console.log(data);
        let movies = data;
        let output = '';
        document.getElementById("movies").textContent= JSON.stringify(movies);

            
        });
        

}
