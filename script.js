"use strict";

window.onload = function() {
	addNavScrollHandler();

	initSlider();
	addSliderCkickHandler();

	addPortfolioButtonsClickHandler();
	addPortfolioImgClickHandler();

	addGetAQuoetClickHandker();
}

// header

const addNavScrollHandler = () => {
	document.addEventListener("scroll", e => {
		const curPos = window.scrollY;
		const sections = document.querySelectorAll("section");
		document.querySelectorAll(".anchor").forEach((el, index) => {
			let delta = index !== 0 ? 95 : 0;
			if ((sections[index].offsetTop - delta) <= curPos && (sections[index].offsetTop + sections[index].offsetHeight + delta) > curPos) {
				document.querySelectorAll(".navigation li a").forEach(a => {
					if (a.classList.contains("header-nav-ref")) {
						a.classList.remove("active-nav");
						if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
							a.classList.add("active-nav");
						}
					}
				});
			}
		});
	});
}

// slider

const addSliderCkickHandler = () => {
	document.querySelector(".slider-block").addEventListener("click", (e) => {
		if (e.target.classList.contains("left-arrow")) {
			slideLeft();
		} else if (e.target.classList.contains("right-arrow")) {
			slideRight();
		} else if (e.target.classList.contains("slider-block-iphones")
			|| e.target.classList.contains("iphone_off")
			) {
			changeIPhoneDisplay(e.target);
		}
	});
}

let slider = document.querySelector("#slider");
const sliderContent = [];
let slides = [];
let size = 940;
let step = 0;
let slidingBlock = false;

const initSlider = () => {
	let s = document.querySelectorAll(".slide");
	for (let i = 0; i < s.length; i++) {
		sliderContent.push(s[i].innerHTML);
		s[i].remove();
	}
	drawSlide();
}

const drawSlide = () => {
	let div = document.createElement("div");
	div.classList.add("slide");
	div.innerHTML = sliderContent[step];
	div.style.left = 0 + "px";
	slider.appendChild(div);
	if (step + 1 === sliderContent.length) {
		step = 0;
	} else {
		step++;
	}
}

const slideLeft = () => {
	if (slidingBlock) return;
	slidingBlock = true;
	let slides2 = document.querySelectorAll(".slide");
	let offset2 = 0;
	slides2.forEach(slide => {
		slide.style.left = offset2 * size - size + "px";
		offset2++;
	});
	changeSlide(slides2[0]);
	setTimeout(() => {
		slides2[0].remove();
		drawSlide();
		slidingBlock = false;
	}, 1000);
}

const slideRight = () => {
	if (slidingBlock) return;
	slidingBlock = true;
	let slides2 = document.querySelectorAll(".slide");
	let offset2 = 0;
	slides2.forEach(slide => {
		slide.style.left = offset2 * size + size + "px";
		offset2++;
	});
	changeSlide(slides2[0]);
	setTimeout(() => {
		slides2[0].remove();
		drawSlide();
		slidingBlock = false;
	}, 1000);
}

const changeSlide = (slide) => {
	let background = document.querySelectorAll(".slider-block")[0];
	let arrows = document.querySelectorAll(".slider-block-arrows");
	let bgColor, bgBorderBottom, arsColor;
	slide.childNodes.forEach(child => {
		if (child.classList) {
			if (child.classList.contains("red")) {
				bgColor = "#648BF0"; // blue
				bgBorderBottom = "6px solid rgb(74, 118, 231)";
				arsColor = "sepia(100%)";
			}
			else if (child.classList.contains("blue")) {
				bgColor = "#f06c64"; // red
				bgBorderBottom = "6px solid #ea676b";
				arsColor = "none";
			}
		}
	});
	background.style["background-color"] = bgColor;
	background.style["border-bottom"] = bgBorderBottom;
	arrows.forEach(arrow => {
		arrow.style["filter"] = arsColor;
	});
}

const changeIPhoneDisplay = (phone) => {
	let displays = document.querySelectorAll(".iphone_off");
	if (phone.classList.contains("iphone-vert")
		|| phone.classList.contains("iphone-vert_off")	
	) {
		if (displays[0].classList.contains("iphone-vert_off_hidden")) {
			displays[0].classList.remove("iphone-vert_off_hidden");
		} else {
			displays[0].classList.add("iphone-vert_off_hidden");
		}
	} else if (phone.classList.contains("iphone-hor")
		|| phone.classList.contains("iphone-hor_off")
	) {
		if (displays[1].classList.contains("iphone-hor_off_hidden")) {
			displays[1].classList.remove("iphone-hor_off_hidden");
		} else {
			displays[1].classList.add("iphone-hor_off_hidden");
		}
	}
}

// portfolio

const addPortfolioButtonsClickHandler = () => {
	document.querySelector(".portfolio__menu").addEventListener("click", (e) => {
		if (e.target.classList.contains("portofolio__menu_button")) {
			let clickedButton = e.target;
			removeActiveButtons();
			activateClickedButton(clickedButton);
			shufflePortfolio();
		}
	});
}

const removeActiveButtons = () => {
	let buttons = document.querySelectorAll(".portfolio__menu .portofolio__menu_button");
	buttons.forEach(button => {
		button.classList.remove("button_active");
	});
} 

const activateClickedButton = (button) => {
	button.classList.add("button_active");
}

const shufflePortfolio = () => {
	let portfolio = document.querySelectorAll(".portfolio_img");
	let i = 0;
	let p = portfolio[i].src;
	for (; i < portfolio.length - 1;) {
		portfolio[i].src = portfolio[++i].src;
	}
	portfolio[portfolio.length - 1].src = p;
}

const addPortfolioImgClickHandler = () => {
	document.querySelector(".full-portfolio").addEventListener("click", (e) => {
		if (e.target.classList.contains("portfolio_img")) {
			let clickedImg = e.target;
			activateImg(clickedImg);
		}
	})
}

const activateImg = (img) => {
	let portfolio = document.querySelectorAll(".portfolio_img");
	portfolio.forEach(p => {
		p.classList.remove("active-img");
	});
	img.classList.add("active-img");
}

// get a quote

const addGetAQuoetClickHandker = () => {
	document.querySelector(".get-a-quote__form").addEventListener("submit", (e) => {
		e.preventDefault();
		console.log(e);
		showGetAQuoteMessage();

		document.querySelector("#form-answer__btn").addEventListener("click", (e) => {
			console.log(e);
			closeGetAQuoteMessage();
		});
	});
}

const showGetAQuoteMessage = () => {
	let formAnswer = document.querySelectorAll(".form-answer");
	formAnswer.forEach(a => {
		a.classList.remove("form-answer_hidden");
	});

	const qfSubject = document.getElementById("quote-form-subject");
	const qfDecs = document.getElementById("quote-form-desc");
	
	if(qfSubject.value) {
		document.getElementById("form-answer__theme").innerHTML = `Тема: ${qfSubject.value}`;
	}
	if(qfDecs.value) {
		document.getElementById("form-answer__desc").innerHTML = `Описание: ${qfDecs.value}`;
	}
}

const closeGetAQuoteMessage = () => {
	let formAnswer = document.querySelectorAll(".form-answer");
	formAnswer.forEach(a => {
		a.classList.add("form-answer_hidden");
	});
	document.querySelector(".get-a-quote__form").reset();
}

