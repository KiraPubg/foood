const cardItem = document.querySelector(".cart__container")
const cartContainer = document.querySelector(".cart__body .container")

const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");
let empty
if (cartStorage.length > 0) {
	empty = false

	cartStorage.forEach(el => {
		const { title, price, id, imgSrc, count } = el;
		const itemInCart = document.querySelector(`[data-id="${id}"]`)
		const emptyStor = JSON.stringify(localStorage.setItem("isEmpty", empty))

		if (itemInCart) {
			const counter = document.querySelector(".cart__count span");
			const cartPrice = document.querySelector(".cart__price span");
			counter.innerText = parseInt(counter.innerText) + parseInt(count)
			cartPrice.innerText = parseInt(counter.innerText) * parseInt(price) + "$";
		} else {
			const newCard = document.createElement("div");
			const cartPrice = document.querySelector(".cart__price span")
			countPrice = parseInt(price) * parseInt(count)
			newCard.innerHTML = `<div class="cart" data-id="${id}"><div class="cart__img"><img src="${imgSrc}" alt=""></div><div class="cart__data"><h5 class="cart__title">${title}</h5><p class="cart__id">id:${id}</p><p class="cart__count">count: <span>${count}</span></p><p class="cart__price">price:<span> ${countPrice}</span></p><a class="cart__button" href="#">remove</a></div></div>`
			cardItem.appendChild(newCard)
			const cart = document.querySelectorAll(".cart");
			cart.forEach((cartEl, i) => {
				const deleteBtn = cartEl.querySelector(".cart__button");
				deleteBtn.addEventListener("click", function () {
					cartEl.remove()
				})
			})
		}
	})
} else {
	empty = true
	const isEmpty = document.createElement("div");
	isEmpty.innerHTML = `<h2 class="cart__empty">Cart is empty :(</h2>`
	cardItem.appendChild(isEmpty)
	cartEmpty = document.querySelector(".cart__empty");
}
console.log(JSON.parse(localStorage.getItem("isEmpty")))
