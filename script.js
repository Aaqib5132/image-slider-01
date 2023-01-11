const prev = document.getElementById('prev')
const next = document.getElementById('next')
const slides = document.querySelectorAll(".image-container")
let totalSlides=slides.length;
let slide = 0;
next.addEventListener('click', () => {
  
   slide++
   if(slide>=totalSlides){
      slide=0
   } 
   loop();
   console.log("slidenow:",slide+ "total slide:",totalSlides)
})  
prev.addEventListener('click', () => {
   slide--
   if(slide<0){
      slide=7;
   } 
   loop();
   console.log("slidenow:",slide+ "total slide:",totalSlides)
})  
console.log(slide)
function loop(){
slides.forEach( (item,index) => {
   item.classList.remove("active");
});
slides[slide].classList.add("active")
}