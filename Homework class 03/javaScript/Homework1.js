$(document).ready(function () {
    $("#button").click(function () {
        $.ajax({
            url:"https://pokeapi.co/api/v2/pokemon",
            success:function (response) {
                console.log(response)
                let counter =1;
                for(let pokemon of response.results){
                    $("#list").append(`<li>${pokemon.name} and url ${pokemon.url}</li>`)
                    counter++
                    if(counter ==11){
                        break;
                    }
                }
            },
            error:function name(errResponse) {
                console.log("Error")
            }
        })
    })
})