function cards() {
	const cards = document.querySelectorAll(".card");

	cards.forEach(card => {
		const cardBtn = card.querySelector(".card__button"),
			dataID = card.querySelector("[data-id]"),
			count = card.querySelector(".card__count"),
			increment = card.querySelector(".card__plus"),
			decrement = card.querySelector(".card__minus");
		let countText = card.querySelector(".card__count-text");
		increment.addEventListener("click", function () {
			countText.innerText = ++countText.innerText
			cardBtn.innerText = "Add to cart"
			cardBtn.disabled = false
		})
		decrement.addEventListener("click", function () {
			countText.innerText = --countText.innerText
			cardBtn.disabled = false
			if (countText.innerText === "0") {
				countText.innerText = "1"
				cardBtn.innerText = "Add to cart"
				count.classList.remove("added")
				cardBtn.innerText = "Add to cart"
				cardBtn.disabled = false
				decrement.disabled = true
			}
		})
		cardBtn.addEventListener("click", function () {
			cardBtn.innerText = "added"
			count.classList.add("added")
			cardBtn.disabled = true
			countText.innerText = countText.innerText
			const productInfo = {
				id: card.dataset.id,
				imgSrc: card.querySelector(".card__image").getAttribute("src"),
				title: card.querySelector(".card__title").innerText,
				rating: card.querySelector(".card__rating span").innerText,
				price: card.querySelector(".card__price span").innerText,
				count: card.querySelector(".card__count-text").innerText,
			}
			const btnINfo = {
				id: productInfo.id,
				disabled: cardBtn.disabled
			}
			const cartStorage = localStorage.getItem("cart") || "[]"
			const cart = JSON.parse(cartStorage)
			localStorage.setItem("cart", JSON.stringify([...cart, productInfo]))			

			const btnStorage = JSON.parse(localStorage.getItem("disable") || "[]")
			localStorage.setItem("disable", JSON.stringify([...btnStorage, btnINfo]))

		})


		const isDisable = JSON.parse(localStorage.getItem("disable") || "[]");

		isDisable.forEach(el => {
			const { disabled, id } = el,
				btnStorage = localStorage.getItem("disable") || "[]",
				dataId = document.querySelector(`[data-id="${id}"]`),
				cardCount = dataId.querySelector(".card__count"),
				dataBtn = dataId.querySelector(".card__button");
			dataBtn.disabled = disabled
			dataBtn.innerText = "added"
			cardCount.classList.add("added")
		})
	});
}
export { cards }
