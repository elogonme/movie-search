$(document).ready(function(){
    $('#movie-card').hide(); // Hide movie card info
    
    // Event listener for search button click
    $('#search').on('click', function(e){
        e.preventDefault();
        var title = $('#movie-name').val();
        getMovie(title); // Callback Movie search function
    });

    // Function to search for movie - call API
    function getMovie(title){
        var endpoint = `http://www.omdbapi.com/?t=${title}&apikey=fac8a5da`;
        fetch(endpoint).then(function(response){
            $('#error').text('');
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request Failed')
        }).then(function(data){
            if (data.Response === 'False') {
                console.log(data.Error);
                $('#error').text(data.Error); // Display error message on page
                return
            }
            
            displayMovieInfo(data); // Call function to display movie info
            $('#movie-card').show();
            console.log(data);
        }).catch(function(err){
            console.log(err);
            
        });

    }

    // Function to display movie info - reads data object properties and outputs in table on page
    function displayMovieInfo(data){
        var output = '';
        for (var property in data) {
        output += property + ': ' + data[property]+'; ';
        }
        $('#poster').attr('src', data.Poster);
        $('#title').text(data.Title)
        $('#actors').text(data.Actors);
        $('#movie-info').empty();
        $('#description').text(data.Plot);
        for (var property in data){
            var $tr = $('<tr>');
            var $th = $('<th>');
            var $td = $('<td>');
            $th.attr('scope', 'row');
            $th.text(property + ': ');
            $td.text(data[property])
            $tr.append($th);
            $tr.append($td);
            $('#movie-info').append($tr);
        };
    };
    
});

