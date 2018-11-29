"use strict";

var content = document.getElementsByClassName("main")[0];

window.addEventListener("load", function () {
	if (localStorage.theme == 1) {
		content.classList.add("invert");
		themeBut.classList.add("invert");
		changeTheme();
	}
});

var themeBut = document.getElementsByClassName("theme")[0];

themeBut.addEventListener("click", function () {
	content.classList.toggle("invert");
	themeBut.classList.toggle("invert");
	changeTheme();

	if (content.classList.contains("invert")) {

		localStorage.theme = 1;
	}
	else {
		localStorage.theme = 0;
	}
})

function changeTheme () {
	var images = document.getElementsByTagName("img");

	for (var i = 0; i < images.length; i++) {
		images[i].classList.toggle("invert");
	}

	var noInvertItem = document.getElementsByClassName("block__text_attention");

	for (var i = 0; i < noInvertItem.length; i++) {
		noInvertItem[i].classList.toggle("invert");
	}
}