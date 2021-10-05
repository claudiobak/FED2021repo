// JavaScript Document


/* intersection observer */
let theReveals = document.querySelectorAll('.reveal');

let IOObserver;

let IOOptions = {
	threshold: .3
};

IOObserver = new IntersectionObserver(IOFunction, IOOptions);

for (reveal of theReveals) {
	IOObserver.observe(reveal);
}

function IOFunction(entries) {
	for (entry of entries) {
		if(entry.isIntersecting) {
			entry.target.classList.add("active");
		}
	}
}




/* menu */
let menuOpenButton = document.querySelector("header > button");
let menuSluitenButton = document.querySelector("header nav button");
let menu = document.querySelector("header nav");

menuOpenButton.addEventListener("click", toggleMenu);
menuSluitenButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  menu.classList.toggle("menuOpen");
  event.target.blur(); /* button verliest focus na de klik */
}




