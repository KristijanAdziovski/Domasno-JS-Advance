$(document).ready(function () {
    $("#one").click(function () {
        $("#table").find("tr:gt(0)").remove();
        $.ajax({
            url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            success:function (response) {
                let students=JSON.parse(response);
                function Average(average){
                    $("#table").append(`
                    <tr>
                    <td>${average.firstName}</td>
                    <td>${average.lastName}</td>
                    <td>${average.averageGrade}</td>
                    </tr>`);
                }
                students.filter(s=>s.averageGrade>3).forEach(Average);
            },
            error:function (response) {
                console.log("error");
                console.log(response);
            }
        })
    })
    $("#two").click(function () {
        $("#table").find("tr:gt(0)").remove();
        $.ajax({
            url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            success:function (response) {
                let students=JSON.parse(response);
                function Average(average){
                    $("table").append(`
                    <tr>
                    <td>${average.firstName}</td>
                    <td>${average.lastName}</td>
                    <td>${average.averageGrade}</td>
                    </tr>`);
                }
                students.filter(s=>s.averageGrade==5).filter(st=>st.gender=="Female").forEach(Average);
            },
            error:function (response) {
                console.log("error");
                console.log(response);
            }
        })
    })
    $("#three").click(function () {
        $("#tableOne").find("tr:gt(0)").remove();
        $.ajax({
            url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            success:function (response) {
                let students=JSON.parse(response);
                function Average(average){
                    $("#tableOne").append(`
                    <tr>
                    <td>${average.firstName}</td>
                    <td>${average.lastName}</td>
                    <td>${average.city}</td>
                    <td>${average.age}</td>
                    </tr>`);
                }
                students.filter(s=>s.city=="Skopje").filter(st=>st.gender=="Male").filter(stu=>stu.age>=18).forEach(Average);
            },
            error:function (response) {
                console.log("error");
                console.log(response);
            }
        })
    })
    $("#four").click(function () {
        $.ajax({
            url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            success:function (response) {
                let students=JSON.parse(response);
                function discount(currentSum, grade){
 
                    return  currentSum += grade 
                }
                let averageStudent=students.filter(s=>s.age>=24).filter(st=>st.gender=="Female").map(stu=>stu.averageGrade)
                .reduce(discount,0);
                $("#taskFour").after(`Sum of average grades of all female students over the age of 24 is : ${averageStudent/students.filter(s=>s.age>=24).filter(st=>st.gender=="Female").length}`);
            },
            error:function (response) {
                console.log("error");
                console.log(response);
            }
        })
    })
    $("#five").click(function () {
        $("#tableTwo").find("tr:gt(0)").remove();
        $.ajax({
            url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            success:function (response) {
                let students=JSON.parse(response);
                function Average(average){
                    $("#tableTwo").append(`
                    <tr>
                    <td>${average.firstName}</td>
                    <td>${average.lastName}</td>
                    <td>${average.averageGrade}</td>
                    </tr>`);
                }
                students.filter(s=>s.gender=="Male").filter(st=>st.firstName.startsWith("B")).filter(stu=>stu.averageGrade>2).forEach(Average);
            },
            error:function (response) {
                console.log("error");
                console.log(response);
            }
        })
    })
})