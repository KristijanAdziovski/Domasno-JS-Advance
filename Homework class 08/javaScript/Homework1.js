$(document).ready(function () {

    async function callFirstUser(url) {
        let response = await fetch(`${url}1`);
        let userOne = await response.json();
        $("#one").append(`<tr><th>${userOne.userId}</th><th>${userOne.id}</th><th>${userOne.title}</th><th>${userOne.body}</th></tr>`)
    }

    async function callUser(url, id) {
        let response = await fetch(`${url}${id}`);
        let users = await response.json();
        $("#two").append(`<tr><th>${users.userId}</th><th>${users.id}</th><th>${users.title}</th><th>${users.body}</th></tr>`)
    }
    $("#buttonOne").click(function () {
        callFirstUser("https://jsonplaceholder.typicode.com/posts/")
    })
    $("#buttonTwo").click(function () {
        let number = +$("#number").val();
        if (number < 1 || number > 100) {
            alert("You enter invalid numer ")
        }
        else {
            callUser("https://jsonplaceholder.typicode.com/posts/", `${number}`);
        }
    })
})