$(document).ready(function(){
    $("#secondButton").hide();
    $("#thirdButton").hide();
    $("#button").click(function(){
    $("#secondButton").show();
    $.ajax({
        url:"https://swapi.dev/api/planets/?page=1",
        success:function (response) {
            console.log(response)
            for(let planets of response.results){
                $("table").append(`<tr><th>${planets.name}</th><th>${planets.population}</th><th>${planets.climate}</th><th>${planets.gravity}</th></tr>`);
            }
            
        },
        error:function name(errResponse) {
            console.log("Error")
        }
    })
  })
  $("#secondButton").click(function(){
      $("#table").find("tr:gt(0)").remove();
      $("#secondButton").hide();
      $("#button").hide();
      $("#thirdButton").show();
    $.ajax({
        url:"https://swapi.dev/api/planets/?page=2",
        success:function (response) {
            let newCounter =11;
            console.log(response)
            for(let planets of response.results){
                $("table").append(`<tr><th>${planets.name}</th><th>${planets.population}</th><th>${planets.climate}</th><th>${planets.gravity}</th></tr>`);
            }
            
        },
        error:function name(errResponse) {
            console.log("Error")
        }
    })
  })
  $("#thirdButton").click(function(){
    $("#table").find("tr:gt(0)").remove();
    $("#secondButton").show();
    $("#button").hide();
    $.ajax({
        url:"https://swapi.dev/api/planets/?page=1",
        success:function (response) {
            console.log(response)
            for(let planets of response.results){
                $("table").append(`<tr><th>${planets.name}</th><th>${planets.population}</th><th>${planets.climate}</th><th>${planets.gravity}</th></tr>`);
            }
            
        },
        error:function name(errResponse) {
            console.log("Error")
        }
    })
  })
  $.ajax({
    url:"https://swapi.dev/api/planets/?page=1",
    success:function (response) {
        let arrOne=[];
        let counterArr =1;
        for(let planets of response.results){
            counterArr++
            arrOne.push(planets.name);
            if(counterArr==6){
                break;
            }
        }
        console.log(arrOne);
    },
    error:function name(errResponse) {
        console.log("Error")
    }
})
$.ajax({
    url:"https://swapi.dev/api/planets/?page=6",
    success:function (response) {
        let arrTwo=[];
        let counterArrTwo=1;
        for(let planetsLast of response.results){
            counterArrTwo++
            arrTwo.push(planetsLast.name);
            if(counterArrTwo==6){
                break;
            }
        }
        console.log(arrTwo);
    },
    error:function name(errResponse) {
        console.log("Error")
    }
})
})