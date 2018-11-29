"use strict";

var hamburger = document.getElementsByClassName("hamburger")[0];
var menu = document.getElementsByClassName("menu")[0];

hamburger.addEventListener("click", function() {
	
	this.classList.toggle("is-active");
	this.style.background = "none";
	menu.classList.toggle("menu-is");
}, false);