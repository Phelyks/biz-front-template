// Date JS Below

let date = new Date();
let year = date.getFullYear()

let months = ["Jan","Feb","March","April","May","Jun","July","Aug","Sept","OCt","Nov","Dec"]

let month = months[date.getMonth()]

let day = date.getDate()


document.getElementById("date").innerHTML = day + "-" + month + "-" + year;

let month1 = months[date.getMonth() - 1];
let day1 = date.getDate() -7;
document.getElementById("date1").innerHTML = day1 + "-" + month1 + "-" + year;

let month2 = months[date.getMonth() - 2];
let day2 = date.getDate() -16;
document.getElementById("date2").innerHTML = day2 + "-" + month2 + "-" + year;


let month3 = months[date.getMonth() - 3];
let day3 = date.getDate() -4;
document.getElementById("date3").innerHTML = day3 + "-" + month3 + "-" + year;

let month4 = months[date.getMonth() - 4];
let day4 = date.getDate() -2;
document.getElementById("date4").innerHTML = day4 + "-" + month4 + "-" + year;

let month5 = months[date.getMonth() - 5];
let day5 = date.getDate() -5;
document.getElementById("date5").innerHTML = day5 + "-" + month5 + "-" + year;