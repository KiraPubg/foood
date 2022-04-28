import { toggleClicks } from "./modules/click.js";
import { resizing, bigPageWidth, noResize } from "./modules/resizePagewidth.js";
import { cards } from "./modules/card.js"
resizing()
noResize()
toggleClicks()
cards()

const headerInpBlock = document.querySelector(".header__search-block"),
	searchBtn = document.querySelector(".header__search-block"),
	headerInp = document.querySelector(".header__input"),
	siteWrapper = document.querySelector(".site__wrapper")


headerInp.addEventListener("focus", function () {
	headerInpBlock.classList.add("focus")
})
headerInp.addEventListener("focusout", function () {
	headerInpBlock.classList.remove("focus")
})