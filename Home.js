/*
#############################
#                           #
#   Javascript for Home     #
#                           #
#############################

Note: slides are kept in HTMLCollection using "getElementsByClassName". Must use "classList" for editing values and changing classes with this method.
Logged slide information in console.
Script must be placed just before the <body> ends.
*/
let slides = document.getElementsByClassName("slide_image");
let dots = document.getElementsByClassName("dot");

let slide_index = 0;


function initialize(){
  console.log(`slide image interval id = ${slide_index} of ${slides.length}`);
  if (slides.length > 0){
    slides[slide_index].classList.add("display_slide");
  }
  dots[slide_index].classList.add("active_dot");
}

function dot_index(index){
  slide_index = index;
  show_slide();
}

function show_slide(){
  console.log(`slide image interval id = ${slide_index} of ${slides.length}`);

  if (slide_index >= slides.length){
    slide_index = 0;
    console.log(`index reset to ${slide_index} after exeeding`);
  }

  else if (slide_index < 0){
    slide_index = slides.length -1;
    console.log(`index reset to ${slide_index} after falling below 0`)
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("display_slide");
    dots[i].classList.remove("active_dot"); 
  }
  slides[slide_index].classList.add("display_slide");
  dots[slide_index].classList.add("active_dot");

}

function prev_slide(){
  slide_index--;
  show_slide();
}

function next_slide(){
  slide_index++;
  show_slide();
  
}

function learn_more(number){
  console.log(number)
  let text_list = document.getElementsByClassName("learn_more_text");
  console.log(text_list);
  text_list[number].classList.add("learn_more_text_show");
  text_list[number].classList.add("fade");
}

function fade_right(variable){
  let output = document.getElementsByClassName(variable);
  console.log(`fading ${variable}`);
  output[0].classList.add("fade_right");
};



/*
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }        
    })
},
   { threshold: 0.5
   });
*/


function check_position(){
  // if the position of the screen is at the destination, then show skills list
  if (position <= trigger_position){
    skills_list[0].classList.add("skills_fade")
  }
  else {
    skills_list[0].classList.remove("skills_fade")
  }
}
const skills_list = document.getElementsByClassName('skills')

let trigger_position = -2040;
let position = 0;
$(window).bind('mousewheel', function(event) {
  if (event.originalEvent.wheelDelta > 0) {
    let value = event.originalEvent.wheelDelta;
    if (position != 0){
      position += value;
      check_position()
    }

  }

  if (event.originalEvent.wheelDelta < 0){
      let value = event.originalEvent.wheelDelta;
      if (position != -3120){
        position += value;
        console.log(` y position: ${position}`);
        check_position()
      } 
  }
  });



console.log(slides);
document.addEventListener("DOMContentLoaded", initialize);
document.addEventListener("DOMContentLoaded", fade_right("welcome_text"));
