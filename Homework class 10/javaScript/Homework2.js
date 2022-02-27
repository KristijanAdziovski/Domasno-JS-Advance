$(document).ready(function () {
    async function capitalInfo(cityTallin) {
        let response = await fetch(`https://restcountries.com/v3.1/capital/${cityTallin}`);
        let data = await response.json();
        data.forEach(obj => {
            Object.entries(obj).forEach(([key, value]) => {
                console.log(`${key} ${value}`);
            });
        });
        data.filter(euro => { currency = Object.keys(euro.currencies) });
        let response2 = await fetch(`https://restcountries.com/v3.1/currency/${currency}`);
        let data2 = await response2.json();
        data2.forEach(e => creatingLi(e.name.official))
    }
    function creatingLi(euro) {
        $("#list").append(`<li>${euro}</li>`)
    }
    capitalInfo("tallinn");
})