// const cookie = document.getElementById("cookie");
//  const cookieCounter = document.getElementById("addCookie").innerHTML("0");
// let cookieTotal = 0;

// function addCookie(){
//     cookieTotal++;
//     cookieCounter.innerHTML = "Cookie Clicked: " + cookieTotal
//     console.log(cookieTotal)
// };

document.querySelector("#cookie").addEventListener('click', function(){
    document.querySelector("#cookieCounter").innerHTML++
})
let cookie = prompt("Did you like cookies?");

