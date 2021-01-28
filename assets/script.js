
let count = 0;
let slides = $('.slides')



function moveSlide(x){
    showSlides(count += x);
}
function showSlides(x){
   if (x > slides.length) {
       count = 0;
   }
   else if (x < 0){
       count = slides.length;
       for (let i = 0; i < slides.length; i++) {
           $(slides[i]).fadeOut();
       }
   }

   $(slides[count]).fadeIn();
}


showSlides(count);