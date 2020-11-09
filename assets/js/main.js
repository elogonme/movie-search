$(document).ready(function(){


    
    $('#search').on('click', function(e){
        e.preventDefault();
        var title = $('#movie-name').val();
        getMovies(title);
    });

    function getMovies(title){

        var endpoint = `http://www.omdbapi.com/?t=${title}&apikey=fac8a5da`;
        fetch(endpoint).then(function(response){
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request Failed')
        }).then(function(data){
            if (data.Response === 'False') {
                console.log(data.Error);
                return
            }
            
            displayMovieInfo(data);
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });

    }

    function displayMovieInfo(data){
        var output = '';
        for (var property in data) {
        output += property + ': ' + data[property]+'; ';
        }
        /*
        <tbody id="movie-info">
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            </tr>
        </tbody>
        */
        
        $('#poster').attr('src', data.Poster);
        $('#title').text(data.Title)
        $('#actors').text(data.Actors);
        for (var property in data){
            var $tr = $('<tr>');
            var $th = $('<th>');
            var $td = $('<td class="text-wrap">');
            $th.attr('scope', 'row');
            $th.text(property + ': ');
            $td.text(data[property])
            $tr.append($th);
            $tr.append($td);
            $('#movie-info').append($tr);
        };

        console.log(output);
    };
})

