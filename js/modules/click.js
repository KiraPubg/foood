function toggleClicks() {
	const burgerOpen = document.querySelector(".menu__burger-open"),
		burgerClose = document.querySelector(".menu__burger-close"),
		menuBurgerItem = document.querySelectorAll(".menu__burger-item"),
		toggleTheme = document.querySelectorAll(".toggle"),
		sunTheme = document.querySelector(".sun"),
		moonTheme = document.querySelector(".moon"),
		siteWrapper = document.querySelector(".site__wrapper"),
		headerRows = document.querySelector(".header__rows"),
		headerCart = document.querySelector(".header__cart"),
		cartWrapper = document.querySelector(".site__wrapper.cart__wrapper"),
		goBack = document.querySelector(".go__back"),
		body = document.querySelector("body");
	toggleTheme.forEach(toggleItem => {
		let toggledTheme = false
		toggleItem.addEventListener("click", function () {
			sunTheme.classList.toggle("toggled-theme");
			moonTheme.classList.toggle("toggled-theme");
			siteWrapper.classList.toggle("night");
			if (siteWrapper.classList.contains("night")) {
				toggledTheme = true
			}else (
				toggledTheme = false
			)
			localStorage.setItem("theme", JSON.stringify(toggledTheme))
			const parseTheme = JSON.parse(localStorage.getItem("theme"))
		}) 
	})
	const thisTheme = JSON.parse(localStorage.getItem("theme"))
	if (thisTheme === true) {
		sunTheme.classList.remove("toggled-theme");
		moonTheme.classList.add("toggled-theme");
		siteWrapper.classList.add("night");
	}else {
		sunTheme.classList.add("toggled-theme");
		moonTheme.classList.remove("toggled-theme");
		siteWrapper.classList.remove("night");
	}
	menuBurgerItem.forEach(toggleItem => {
		toggleItem.addEventListener("click", function () {
			burgerOpen.classList.toggle("active")
			burgerClose.classList.toggle("active")
			headerRows.classList.toggle("mobile")
			body.classList.toggle("no-skroll")
		})
	})

}



export { toggleClicks }
