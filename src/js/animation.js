import Marquee3k from 'marquee3000';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

Marquee3k.init()


if(window.innerWidth > 769){
  Draggable.create(".about-container");
}


function showTime(){

  var options = { hour12: false };

    var date = new Date();
    var h = date.getHours(options);
    var m = date.getMinutes();
    var s = date.getSeconds();
    let month = date.getMonth();
    let day = date.getDate();

    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);


    if(window.innerWidth < 769){
      document.getElementById("oraCompleta").innerText = h + ":" + m;
    }

    document.getElementById("ore").innerText = h;
    document.getElementById("minuti").textContent =  m;
    document.getElementById("giorno").textContent = day;
    document.getElementById("mese").textContent = month+1;



    setTimeout(showTime, 1000);

}

showTime();

const fade = gsap.utils.toArray("[fade]");
  fade.forEach((el, i) => {
    gsap.fromTo(el, {autoAlpha: 0}, {duration: 2, autoAlpha: 1});
  });


// open modal

let modal = document.querySelector(".about-container");
let close = document.querySelector(".close");
let about = document.querySelector("#about");

about.addEventListener("click", function(){
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
});

close.addEventListener("click", function(){
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
})
