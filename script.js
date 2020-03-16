window.onload = function() {
	addHeaderCkickHandler();

	addSliderCkickHandler();

	addPortfolioButtonsClickHandler();
	addPortfolioImgClickHandler();

	addGetAQuoetClickHandker();
}

// header

const addHeaderCkickHandler = () => {
	document.querySelector(".header-nav").addEventListener("click", (e) => {
		if (e.target.classList.contains("header-nav-ref")) {
			let clickedNav = e.target;
			console.log(e.target);
			removeActiveNavs();
			activateClickedNav(clickedNav);
		}
	});
}

const removeActiveNavs = () => {
	let navs = document.querySelectorAll(".navigation li a");
	navs.forEach(nav => {
		nav.classList.remove("active-nav");
	});
} 

const activateClickedNav = (nav) => {
	nav.classList.add("active-nav");
}

// slider

const addSliderCkickHandler = () => {
	document.querySelector(".slider-block").addEventListener("click", (e) => {
		if (e.target.classList.contains("slider-block-arrows")) {
			changeSlide();
		} else if (e.target.classList.contains("slider-block-iphones")
			|| e.target.classList.contains("iphone_off")
			) {
			changeIPhoneDisplay(e.target);
		}
	});
}

const changeSlide = () => {
	let slides = document.querySelectorAll(".slide");
	slides.forEach(slide => {
		if (slide.classList.contains("hidden-slide")) {
			slide.classList.remove("hidden-slide");
		} else {
			slide.classList.add("hidden-slide");
			let background = document.querySelectorAll(".slider-block")[0];
			let arrows = document.querySelectorAll(".slider-block-arrows");
			let bgColor = background.style["background-color"];
			let bgBorderBottom = background.style["border-bottom"];
			let arsColor;
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
}

