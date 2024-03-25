import simpleParallax from 'simple-parallax-js';

var image = document.getElementsByClassName('thumbnail');


new simpleParallax(image, {
	delay: .8,
	transition: 'cubic-bezier(0,0,0,1)'
});
console.log('images',image);