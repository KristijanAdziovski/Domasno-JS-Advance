$(document).ready(function () {
    let myInput=$("#number");
    $("#button").click(function () {
        fetch("https://dog.ceo/api/breed/hound/images")
        .then(function (response) {
            response.json().then(function (data) {
                if(myInput.val()<1 || myInput.val()>1000){
                    alert("You entered a number above 1000 or below 1 ");
                    return 0;
                }
                else{
                $("#dog").after(`<img src="${data.message[myInput.val()-1]}">`);
                 }
            })
        })
        .catch(function (errorResponse) {
            console.log("Error with the API !!!")
        })
    })
})