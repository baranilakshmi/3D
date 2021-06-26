//background: linear-gradient(90deg, rgba(23,20,54,1) 0%, rgba(130,130,180,1) 35%);;
const outer = document.querySelector(".wrapper");
//console.log(outer);
const inner = document.querySelector(".card");
//console.log(inner);
const image = document.querySelector(".img");
//console.log(image);
const quotes = document.querySelector(".description");
//console.log(quotes);

console.log(window.pageXOffset);
//console.log(window.pageYOffset);

inner.addEventListener('mousemove',(e) => {

console.log(e.pageX);

let xAxis = (window.innerWidth/2 - e.pageX)/10;
let yAxis = (window.innerHeight/2 - e.pageY)/10;

outer.style.transform = (`rotateX(${xAxis}deg) rotateY(${yAxis}deg)`)
image.style.transform = `translateZ(150PX) rotateZ(-45deg) scale(2,2)`

 });



inner.addEventListener('mouseenter',(e) => {
outer.style.transform = "none";
image.style.transform = "none";
quotes.innerHTML = `Time to bond<br>Brother's Bond<br>Virtual tasting!`
quotes.style = "border: 1px solid black";
inner.style = "background-color: orangered;"

} )

inner.addEventListener('mouseleave',(e)=> {

    outer.style.transition = "all 0.5s ease"
    image.style.transition = "all 0.5s ease "
    outer.style.transform = (`rotateX(0deg) rotateY(0deg)`)
    image.style.transform = `translateZ(0PX) rotateZ(0) `
    quotes.innerHTML = " ";
    quotes.style = "";
inner.style = "";
})

