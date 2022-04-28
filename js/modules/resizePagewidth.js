function bigPageWidth() {
	const burgerOpen = document.querySelector(".menu__burger-open"),
		burgerClose = document.querySelector(".menu__burger-close"),
		menuBurger = document.querySelector(".menu__burger"),
		headerRows = document.querySelector(".header__rows"),
		body = document.querySelector("body");
	const pageWidth = document.documentElement.scrollWidth;
	if (pageWidth > 991.99) {
		body.classList.remove("no-scroll")
		burgerOpen.classList.add("active")
		headerRows.classList.remove("mobile")
		burgerClose.classList.remove("active")
		menuBurger.style.display = "none"
	} else if (pageWidth < 992) {
		menuBurger.style.display = "block"
	}
}
 function resizing() {
	[`resize`].forEach(it => {
		window.addEventListener(it, () => {
			bigPageWidth()
		});
	});
}

const noResize = () => {
	const pageWidth = document.documentElement.scrollWidth;
	if (pageWidth < 992) {
		bigPageWidth()
	}
}

export  {resizing, bigPageWidth, noResize};