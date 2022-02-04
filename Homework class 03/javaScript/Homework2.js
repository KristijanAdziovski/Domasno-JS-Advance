$(document).ready(function () {
    $("#button").click(function () {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function (response) {
            response.json().then(function (data) {
                $("table").append(`
                <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>${data.address.street}</td>
                <td>${data.address.suite}</td>
                <td>${data.address.city}</td>
                <td>${data.address.zipcode}</td>
                <td>${data.address.geo.lat}</td>
                <td>${data.address.geo.ing}</td>
                <td>${data.phone}</td>
                <td>${data.website}</td>
                <td>${data.company.name}</td>
                <td>${data.company.catchPhrase}</td>
                <td>${data.company.bs}</td>
                </tr>`);
                
            })
        })
        .catch(function (errorResponse) {
            console.log("Error with the API !!!")
        })
    })
})