$(document).ready(function () {
    let firstName=["Kristijan","Martin","Marko","Stefan","Angela"];
    let lastName=["Adziovski","Stefanovski","Markovski","Stojkovski","Stojanovska"];  
    $("#button").click(function () {
        list=((fullName)=>
        {let fullArr=[];for(let i=0;i<fullName.length;i++)   
        {fullArr[i]=`${firstName[i]} ${lastName[i]}`}
        console.log(fullArr)
        return $("#list").append(`The list of name and last name is : <li>${fullArr}</li>`)})(firstName,lastName)
    })
})

