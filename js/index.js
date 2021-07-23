// for the first img
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // //random generator 1-6
let randImg1 = "dice" + randomNumber1 + ".png";   // img name
let randImgSrc1 = "static/images/" + randImg1;    //img src
let selectImg1 = document.querySelectorAll("img")[0];   // retrieving img source
selectImg1.setAttribute("src", randImgSrc1);   // set the new source


// for the second img
let randomNumber2 = Math.floor(Math.random() * 6) + 1; //random generator 1-6
let randImg2 = "dice" + randomNumber2 + ".png"; // img name
let randImgSrc2 = "static/images/" + randImg2; //img src
let selectImg2 = document.querySelectorAll("img")[1]; // retrieving img source
selectImg2.setAttribute("src", randImgSrc2); // set the new source


// now to change the h1 tag -- to show the winner
let heading = document.querySelector("h1");  // selecting the h1 tag
let headingData = "";

if(randomNumber1 > randomNumber2){
    headingData = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    headingData = "player 2 Wins";
}
else{
    headingData = "Draw!";
}

heading.innerText = headingData;   // winner message in added