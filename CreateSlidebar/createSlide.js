var demo=()=>{
  var x=  document.querySelector(".advance");
    x.style.transform="scale(1.2)";
    x.style.transition="2s";
    
};
 var xx=document.querySelector(".fa-bars")
xx.onclick=function(){
var navbar=document.querySelectorAll(".left-slider")
navbar.forEach((x) => {
  
x.classList.toggle(".active");
});
};
