const parallax = document.getElementById("body1")
window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset*0.6+"px"
})

