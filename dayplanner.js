//moment().format();

var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var nine = [];
var ten = [];
var eleven = [];
var twelve = [];
var one = [];
var two = [];
var three = [];
var four = [];
var five = [];
var getNine = JSON.parse(localStorage.getItem("9AM"));
var getTen = JSON.parse(localStorage.getItem("10AM"));
var getEleven = JSON.parse(localStorage.getItem("11AM"));
var getTwelve = JSON.parse(localStorage.getItem("12PM"));
var getOne = JSON.parse(localStorage.getItem("1PM"));
var getTwo = JSON.parse(localStorage.getItem("2PM"));
var getThree = JSON.parse(localStorage.getItem("3PM"));
var getFour = JSON.parse(localStorage.getItem("4PM"));
var getFive = JSON.parse(localStorage.getItem("5PM"));

starter();
function starter() {
    if (getNine !== null) {
        oldNine();
    }
    if (getTen !== null) {
        oldTen();
    }
    if (getEleven !== null) {
        oldEleven();
    }
    if (getTwelve !== null) {
        oldTwelve();
    }
    if (getOne !== null) {
        oldOne();
    }
    if (getTwo !== null) {
        oldTwo();
    }
    if (getThree !== null) {
        oldThree();
    }
    if (getFour !== null) {
        oldFour();
    }
    if (getFive !== null) {
        oldFive();
    }
}


function oldNine() {
    var getNine = JSON.parse(localStorage.getItem("9AM"));
    for (var j = 0; j <= getNine.length; j++) {
        nine.push(getNine[j]);
    }
    for (var k = 0; k < nine.length; k++) {
        $("#9").append($("<li>")).append(nine[k]);
    };
}

$(".table2").hide();

function oldTen() {
    //10

    var getTen = JSON.parse(localStorage.getItem("10AM"));
    if (getTen.length > 0) {
        for (var j = 0; j < getTen.length; j++) {
            ten.push(getTen[j]);
        }
        for (var k = 0; k < ten.length; k++) {
            $("#10").append($("<li>")).append(ten[k]);
        };
    }
}
function oldEleven() {
    //11

    var getEleven = JSON.parse(localStorage.getItem("11AM"));
    if (getEleven.length > 0) {
        for (var j = 0; j < getEleven.length; j++) {
            eleven.push(getEleven[j]);
        }
        for (var k = 0; k < eleven.length; k++) {
            $("#11").append($("<li>")).append(eleven[k]);
        };
    }
}
function oldTwelve() {
    //12

    var getTwelve = JSON.parse(localStorage.getItem("12PM"));

    if (getTwelve.length > 0) {
        for (var j = 0; j < getTwelve.length; j++) {
            twelve.push(getTwelve[j]);
        }
        for (var k = 0; k < twelve.length; k++) {
            $("#12").append($("<li>")).append(twelve[k]);
        };
    }
}
function oldOne() {
    //1

    var getOne = JSON.parse(localStorage.getItem("1PM"));
    if (getOne.length > 0) {
        for (var j = 0; j < getOne.length; j++) {
            one.push(getOne[j]);
        }
        for (var k = 0; k < one.length; k++) {
            $("#1").append($("<li>")).append(one[k]);
        };
    }
}
function oldTwo() {
    //2

    var getTwo = JSON.parse(localStorage.getItem("2PM"));
    if (getTwo.length > 0) {
        for (var j = 0; j < getTwo.length; j++) {
            two.push(getTwo[j]);
        }
        for (var k = 0; k < two.length; k++) {
            $("#2").append($("<li>")).append(two[k]);
        };
    }
}
function oldThree() {
    //3

    var getThree = JSON.parse(localStorage.getItem("3PM"));
    if (getThree.length > 0) {
        for (var j = 0; j < getThree.length; j++) {
            three.push(getThree[j]);
        }
        for (var k = 0; k < three.length; k++) {
            $("#3").append($("<li>")).append(three[k]);
        };
    }
}
function oldFour() {
    //4

    var getFour = JSON.parse(localStorage.getItem("4PM"));
    if (getFour.length > 0) {
        for (var j = 0; j < getFour.length; j++) {
            four.push(getFour[j]);
        }
        for (var k = 0; k < four.length; k++) {
            $("#4").append($("<li>")).append(four[k]);
        };
    }
}
function oldFive() {
    //5

    var getFive = JSON.parse(localStorage.getItem("5PM"));
    if (getFive.length > 0) {
        for (var j = 0; j < getFive.length; j++) {
            five.push(getFive[j]);
        }
        for (var k = 0; k < five.length; k++) {
            $("#5").append($("<li>")).append(five[k]);
        };
    }
}

//9AM - set New Event w/ Time
$("#save").on("click", function () {
    var newTime = $("#newTime").val();
    var newEvent = $("#newEvent").val();
    console.log(newTime);
    if (newTime === "9AM") {
        $("#9").empty();
        nine.push(newEvent);
        for (var i = 0; i < nine.length; i++) {
            $("#9").append($("<li>")).append(nine[i]);
        };
        localStorage.setItem("9AM", JSON.stringify(nine));
    }
    if (newTime === "10AM") {
        $("#10").empty();
        ten.push(newEvent);
        for (var i = 0; i < ten.length; i++) {
            $("#10").append($("<li>")).append(ten[i]);
        };
        localStorage.setItem("10AM", JSON.stringify(ten));
    }
    if (newTime === "11AM") {
        $("#11").empty();
        eleven.push(newEvent);
        for (var i = 0; i < eleven.length; i++) {
            $("#11").append($("<li>")).append(eleven[i]);
        };
        localStorage.setItem("11AM", JSON.stringify(eleven));
    }
    if (newTime === "12PM") {
        $("#12").empty();
        twelve.push(newEvent);
        for (var i = 0; i < twelve.length; i++) {
            $("#12").append($("<li>")).append(twelve[i]);
        };
        localStorage.setItem("12PM", JSON.stringify(twelve));
    }
    if (newTime === "1PM") {
        $("#1").empty();
        one.push(newEvent);
        for (var i = 0; i < one.length; i++) {
            $("#1").append($("<li>")).append(one[i]);
        };
        localStorage.setItem("1PM", JSON.stringify(one));
    }
    if (newTime === "2PM") {
        $("#2").empty();
        two.push(newEvent);
        for (var i = 0; i < two.length; i++) {
            $("#2").append($("<li>")).append(two[i]);
        };
        localStorage.setItem("2PM", JSON.stringify(two));
    }
    if (newTime === "3PM") {
        $("#3").empty();
        three.push(newEvent);
        for (var i = 0; i < three.length; i++) {
            $("#3").append($("<li>")).append(three[i]);
        };
        localStorage.setItem("3PM", JSON.stringify(three));
    }
    if (newTime === "4PM") {
        $("#4").empty();
        four.push(newEvent);
        for (var i = 0; i < four.length; i++) {
            $("#4").append($("<li>")).append(four[i]);
        };
        localStorage.setItem("4PM", JSON.stringify(four));
    }
    if (newTime === "5PM") {
        $("#5").empty();
        five.push(newEvent);
        for (var i = 0; i < five.length; i++) {
            $("#5").append($("<li>")).append(five[i]);
        };
        localStorage.setItem("5PM", JSON.stringify(five));
    }
});

$(".addBTN").on("click", function () {
    $(".table2").toggle(1000);
})

$("#9AM").on("click", function () {
    localStorage.removeItem("9AM");
    location.reload();})
$("#10AM").on("click", function () {
    localStorage.removeItem("10AM");
    location.reload();})
$("#11AM").on("click", function () {
    localStorage.removeItem("11AM");
    location.reload();
})
$("#12PM").on("click", function () {
    localStorage.removeItem("12PM");
    location.reload();})
$("#1PM").on("click", function () {
    localStorage.removeItem("1PM");
    location.reload();})
$("#2PM").on("click", function () {
    localStorage.removeItem("2PM");
    location.reload();})
$("#3PM").on("click", function () {
    localStorage.removeItem("3PM");
    location.reload();})
$("#4PM").on("click", function () {
    localStorage.removeItem("4PM");
    location.reload();})
$("#5PM").on("click", function () {
    localStorage.removeItem("5PM");
    location.reload();})

$("#Date").text(moment().format("MMM Do YY"));

console.log(moment().format("MMM Do YY"));