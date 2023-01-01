//landin page
letlandingPage = document.querySelector(".landing-page")
//get array of img
let imgsArray = ["../img/pos4.png","../img/jump.jpg","backgroundpos.jpg"]

//get random number

setInterval(function(){
    let randomNumber = Math.floor(Math.random()*imgsArray.length);
    //change bg images url
letlandingPage.style.backgroundImage = 'url("../img/' + imgsArray[randomNumber]+ '")';
},3000)