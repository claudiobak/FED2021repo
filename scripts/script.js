// JavaScript Document

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
    // else{
    //     reveals[i].classList.remove('active');
    // }
  }
}

// const images = document.querySelector('.anim')

// observer = new IntersectionObserver((entries) => {

//     entries.forEach(entry => {
//       if(entry.IntersectionRatio > 0) {
//         entry.target.style.animation = `anim1 2s forwards ease-out` ;
//       }
//       else {
//         entry.target.style.animation = 'none';
//       }

// })

// images.forEach(image => {
// observer.observe(images)
// })
// })