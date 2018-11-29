"use strict";

var clider = document.getElementsByClassName("slider")[0];
var sliderCont = document.getElementsByClassName("slider__cont")[0];

var contWidth = sliderCont.offsetWidth;

window.addEventListener("resize", function () {
	contWidth = 500px;
	console.log(contWidth);
})

var i = 1;
var margin = 0;

setInterval(function () {

	margin = -i * contWidth;
	sliderCont.style.marginLeft = margin + "px";
	console.log(i);

	if (i < sliderCont.children.length - 1) {
		i++;
	}
	else {
		i = 1
	}
}, 2000)