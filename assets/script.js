const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let left_arrow = document.querySelector("#arrow_left");
let right_arrow = document.querySelector("#arrow_right");
let dots = document.querySelector('.dots');
let banner = document.querySelector('.banner-img');
let tagline = document.querySelector('#banner p');

let i = 0;

right_arrow.addEventListener("click" , () => {

	i++
	i = i % slides.length
	//if(i >= slides.length ){ i = 0 }
	//console.log(slides[i].image)
	attribute()
	dotslide()

}
);

left_arrow.addEventListener("click" , () => {

	i--
	if(i < 0 ){ i = slides.length - 1 }
	//console.log(slides[i].image)
	attribute()	
	dotslide()

} );

function dotslide(){

	//for(counter = 0 ; counter < dots.length ; counter++){
       // dots[counter].className = dots[counter].className.replace(' dot_selected', '');}
	//dots[i].className += ' dot_selected';
	dots.innerHTML = "";
	for(counter = 0 ; counter < slides.length; counter++){
		let dot = document.createElement("div")
		dot.classList.add("dot")
		if(counter == i){
			dot.classList.add('dot_selected')
		}
		dots.appendChild(dot)

	}
}

function attribute(){

	banner.setAttribute("src","./assets/images/slideshow/"+ slides[i].image )
	tagline.innerHTML = slides[i]. tagLine;	

}	

	

