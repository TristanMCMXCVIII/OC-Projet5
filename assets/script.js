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


const arrowLeft = document.getElementsByClassName('arrow_left');
const arrowRight = document.getElementsByClassName('arrow_right');
const imgBanner = document.getElementsByClassName('banner-img');
const dots = document.getElementsByClassName('dot'); 
const title = document.querySelector('#banner > p');


arrowLeft[0].addEventListener('click', function(event) {

	event.stopPropagation();
	
	console.log('appui sur le btn gauche');
	
	const j = slides.length;

	for(let i=0 ; i<j ; i++){

		if(imgBanner[0].getAttribute("src") == "./assets/images/slideshow/".concat(slides[i]["image"])){ 

			if(i > 0){
				dots[i].classList.remove('dot_selected'); 
				imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[i-1]["image"])); 
				dots[i-1].classList.add('dot_selected'); 
				title.innerHTML = slides[i-1]["tagLine"]; 
			}

			else{  
				dots[i].classList.remove('dot_selected');
				imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[j-1]["image"]));
				dots[j-1].classList.add('dot_selected');
				title.innerHTML = slides[j-1]["tagLine"];
			}

			break;
		}
	}
});


arrowRight[0].addEventListener('click', function(event){

	event.stopPropagation();
	
	console.log('appui sur le btn droit');
	
	const j = slides.length;

	for(let i=0 ; i<j ; i++){

		if(imgBanner[0].getAttribute("src") == "./assets/images/slideshow/".concat(slides[i]["image"])){ 

			if(i < j-1){
				dots[i].classList.remove('dot_selected'); 
				imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[i+1]["image"])); 
				dots[i+1].classList.add('dot_selected');
				title.innerHTML = slides[i+1]["tagLine"]; 
			}

			else{ 
				dots[i].classList.remove('dot_selected');
				imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[0]["image"]));
				dots[0].classList.add('dot_selected');
				title.innerHTML = slides[0]["tagLine"];
			}

			break;
		}
	}
});



/* // VERSION switch / case



arrowRight[0].addEventListener('click', function(event){

	event.stopPropagation();

	console.log('appui sur le btn droite');

	switch(imgBanner[0].getAttribute("src")){
		case "./assets/images/slideshow/".concat(slides[0]["image"]) :
			imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[1]["image"]));
			dots[0].classList.remove('dot_selected');
			dots[1].classList.add('dot_selected');
			title.innerHTML = slides[1]["tagLine"];
			break;
		
		case "./assets/images/slideshow/".concat(slides[1]["image"]) :
			imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[2]["image"]));
			dots[1].classList.remove('dot_selected');
			dots[2].classList.add('dot_selected');
			title.innerHTML = slides[2]["tagLine"];
			break;

		case "./assets/images/slideshow/".concat(slides[2]["image"]) :
			imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[3]["image"]));
			dots[2].classList.remove('dot_selected');
			dots[3].classList.add('dot_selected');
			title.innerHTML = slides[3]["tagLine"];
			break;

		case "./assets/images/slideshow/".concat(slides[3]["image"]) :
			imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[0]["image"]));
			dots[3].classList.remove('dot_selected');
			dots[0].classList.add('dot_selected');
			title.innerHTML = slides[0]["tagLine"];
			break;
	}
});



arrowLeft[0].addEventListener('click', function(event) {

	event.stopPropagation();
	
	console.log('appui sur le btn gauche');
	
	switch(imgBanner[0].getAttribute("src")){
		case "./assets/images/slideshow/".concat(slides[0]["image"]) :
			imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[3]["image"]));
			dots[0].classList.remove('dot_selected');
			dots[3].classList.add('dot_selected');
			title.innerHTML = slides[3]["tagLine"];
			break;
		
		case "./assets/images/slideshow/".concat(slides[1]["image"]) :
			imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[0]["image"]));
			dots[1].classList.remove('dot_selected');
			dots[0].classList.add('dot_selected');
			title.innerHTML = slides[0]["tagLine"];
			break;

		case "./assets/images/slideshow/".concat(slides[2]["image"]) :
			imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[1]["image"]));
			dots[2].classList.remove('dot_selected');
			dots[1].classList.add('dot_selected');
			title.innerHTML = slides[1]["tagLine"];
			break;

		case "./assets/images/slideshow/".concat(slides[3]["image"]) :
			imgBanner[0].setAttribute("src", "./assets/images/slideshow/".concat(slides[2]["image"]));
			dots[3].classList.remove('dot_selected');
			dots[2].classList.add('dot_selected');
			title.innerHTML = slides[2]["tagLine"];
			break;
	}	
});*/