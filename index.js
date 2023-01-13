// intro to js//
//https://icanhazdadjoke.com/ //

const loginPopup = document.querySelector(".login-popup");

window.addEventListener("load", function(){

  showPop();
  
})

function showPop() {
   const timeLimit = 5 // seconds;
   let i=0;
   const timer = setInterval(function(){
    i++;
    if(i == timeLimit){
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
    console.log(i)
   },1000);
   
}

document.getElementById("btn").addEventListener("click", joke);

async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };

  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.getElementById("content").innerHTML = b.joke;
}