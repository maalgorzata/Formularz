
// Inputs
var nameInput = document.querySelector("#name-input");
var ageInput = document.querySelector("#age-input");
var cityInput= document.querySelector("#city-input");

// Tekst values


var nameText= document.querySelector("#text-name");
var ageText= document.querySelector("#text-age");
var cityText= document.querySelector("#text-city");


nameInput.addEventListener("keyup", function(e){

     nameText.textContent=nameInput.value;
});


ageInput.addEventListener("keyup", function(e){

    ageText.textContent=ageInput.value;

});


cityInput.addEventListener("keyup", function(e){

    cityText.textContent=cityInput.value;

});