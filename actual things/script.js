function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Zatvori mu mamu
window.onclick = function(event) {
  if (!event.target.matches('.navbar-burger')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* HOME JS */
document.getElementById("Home").onclick=function(){
       location.href="index.html";
     };
document.getElementById("Contact").onclick=function(){
       location.href="contact.html";
     };


/* NT CALCULATOR */

document.getElementById("residue").onclick=function(){
       location.href="residue.html";
    };
document.getElementById("ord").onclick=function(){
       location.href="ord.html";
    };
document.getElementById("x^y").onclick=function(){
       location.href="x^y.html";
     };
document.getElementById("system").onclick=function(){
       location.href="system.html";
     };
document.getElementById("phi").onclick=function(){
       location.href="phi.html";
     };
document.getElementById("divisors").onclick=function(){
       location.href="divisors.html";
     };
document.getElementById("prime").onclick=function(){
       location.href="primes.html";
     };
document.getElementById("NZD").onclick=function(){
       location.href="NZD.html";
     };
document.getElementById("game").onclick=function(){
       location.href="randomgame.html";
     };
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/*function myFunction() {
  var x = document.getElementById("myDropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}*/
