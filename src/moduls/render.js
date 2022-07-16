import flowers from "./flowers.js";

const card = document.querySelector(".produkt-catalog");
const cards = document.querySelectorAll(".catalog-card");
const fbut = document.querySelector('.flow');
const kbut = document.querySelector('.bucket');
const cbut = document.querySelector('.carts');
const do5 = document.querySelector('.do5');
const after5 = document.querySelector('.after5');
const red = document.querySelector('.red');
const white = document.querySelector('.white');
const yellow = document.querySelector('.yellow');

class Render {

	constructor(flowers) {
		this.flowers = flowers;
		fbut.addEventListener('click', e => {

			this.filter(e);
		});
		kbut.addEventListener('click', e => {

			this.filter(e);
		});

		cbut.addEventListener('click', e => {

			this.filter(e);
		});

		do5.addEventListener('click', e => {
			after5.classList.remove("active")
			do5.classList.toggle("active")
			this.filter(e);
		});

		after5.addEventListener('click', e => {
			do5.classList.remove("active")
			after5.classList.toggle("active")
			this.filter(e);
		});

		red.addEventListener('click', e => {
			red.classList.toggle("active")
			this.filter(e);
		});

		white.addEventListener('click', e => {
			white.classList.toggle("active")
			this.filter(e);
		});

		yellow.addEventListener('click', e => {
			yellow.classList.toggle("active")
			this.filter(e);
		});

	}

	renderCards(flowers) {
		const newdiv = document.createElement("div")
		newdiv.classList.add("ggd")
		flowers.forEach(function (key, index) {
			let cards = `<div class="catalog-card">
		<div class="card-item">
			<div class="img-item">
				<img class="img-buket" src="${key.img}" alt="image">
			</div>
			<div class="text-item">
			${key.name}
			</div>
			<div class="much">
				Количество:${key.much}
			</div>
			<div class="size">
			Бутон ${key.but}
			</div>
			<div class="fcolor">
				Цвет: ${key.color}
			</div>
			<div class="type">
				Тип: ${key.type}
			</div>
			<div class="length">
				Длина цветка: ${key.flength}
			</div>
			<div class="length">
				Популярный: ${key.popular}
			</div>
		</div>
	</div>`



			newdiv.insertAdjacentHTML("afterbegin", cards);

			return newdiv



		})


		card.replaceChildren(newdiv);

	}


	filter(e) {

		/* Фильтры по кнопкам вида цветов */


		if (e.target.classList.contains('flow')) {
			fbut.classList.toggle("active")
			const onlyFlowers = fbut.classList.contains("active") ? flowers.filter((key) => key.type === "Цветы") : flowers;
			this.renderCards(onlyFlowers)

		}


		if (e.target.classList.contains('bucket')) {
			kbut.classList.toggle("active")
			const onlyBuket = kbut.classList.contains("active") ? flowers.filter((key) => key.type === "Букет") : flowers;
			this.renderCards(onlyBuket)
		}

		if (e.target.classList.contains('carts')) {
			cbut.classList.toggle("active")
			const onlyCarts = cbut.classList.contains("active") ? flowers.filter((key) => key.type === "Корзинка") : flowers;
			this.renderCards(onlyCarts)
		}


		/* Меньше 5 см */

		if (e.target.classList.contains('do5')) {
			const onlydo5 = do5.classList.contains("active") ? flowers.filter((key) => key.but === "Меньше 5см.") : flowers;
			this.renderCards(onlydo5)
		}


		/* Больше 5 */

		if (e.target.classList.contains('after5')) {
			const onlyafter5 = after5.classList.contains("active") ? flowers.filter((key) => key.but === "Больше 5см.") : flowers;
			this.renderCards(onlyafter5)
		}


		/* Логика red */

		if (e.target.classList.contains('red')) {
			const onlyRed = red.classList.contains("active") ? flowers.filter((key) => key.color === "Красный") : flowers;
			this.renderCards(onlyRed)
		}
		if (e.target.classList.contains('white')) {
			const onlyWhite = white.classList.contains("active") ? flowers.filter((key) => key.color === "Белый") : flowers;
			this.renderCards(onlyWhite)
		}
		if (e.target.classList.contains('yellow')) {
			const onlyYellow = yellow.classList.contains("active") ? flowers.filter((key) => key.color === "Желтый") : flowers;
			this.renderCards(onlyYellow)
		}



		///////////////////////////////////////////////



		const onlyFlowers = fbut.classList.contains("active") ? flowers.filter((key) => key.type === "Цветы") : flowers;
		const onlyBuket = kbut.classList.contains("active") ? flowers.filter((key) => key.type === "Букет") : flowers;
		const onlyCarts = cbut.classList.contains("active") ? flowers.filter((key) => key.type === "Корзинка") : flowers;
		const onlydo5 = do5.classList.contains("active") ? flowers.filter((key) => key.but === "Меньше 5см.") : flowers;
		const onlyafter5 = after5.classList.contains("active") ? flowers.filter((key) => key.but === "Больше 5см.") : flowers;


		let FlowCartsArr = [];
		function FlowCarts() {
			flowers.filter(function (key) {
				key.type === "Корзинка" ? FlowCartsArr.push(key) : 0
				key.type === "Цветы" ? FlowCartsArr.push(key) : 0
				return FlowCartsArr
			})
		}

		let FlowBukArr = [];
		function FlowBuk() {
			flowers.filter(function (key) {
				key.type === "Букет" ? FlowBukArr.push(key) : 0
				key.type === "Цветы" ? FlowBukArr.push(key) : 0
				return FlowBukArr
			})
		}

		let BukCartArr = [];
		function BukCart() {
			flowers.filter(function (key) {
				key.type === "Букет" ? BukCartArr.push(key) : 0
				key.type === "Корзинка" ? BukCartArr.push(key) : 0
				return BukCartArr
			})
		}

		let do5Arr = [];
		function do5Run(flowers) {
			flowers.filter(function (key) {
				key.but === "Меньше 5см." ? do5Arr.push(key) : 0
				return do5Arr
			})
		}

		let after5Arr = [];
		function after5Run(flowers) {
			flowers.filter(function (key) {
				key.but === "Больше 5см." ? after5Arr.push(key) : 0
				return do5Arr
			})
		}

		let redArr = [];
		function redRun(flowers) {

			flowers.filter(function (key) {
				key.color === "Красный" ? redArr.push(key) : 0
				return redArr
			})

		}

		let whiteArr = [];
		function whiteRun(flowers) {
			flowers.filter(function (key) {
				key.color === "Белый" ? whiteArr.push(key) : 0
				return whiteArr
			})
		}

		let yellowArr = [];
		function yellowRun(flowers) {
			flowers.filter(function (key) {
				key.color === "Желтый" ? yellowArr.push(key) : 0
				return yellowArr
			})
		}

		let redWhiteArr = [];
		function redWhite(flowers) {
			flowers.filter(function (key) {
				key.color === "Красный" ? redWhiteArr.push(key) : 0
				key.color === "Белый" ? redWhiteArr.push(key) : 0
				return redWhiteArr
			})
		}

		let redYellowArr = [];
		function redYellow(flowers) {
			flowers.filter(function (key) {
				key.color === "Красный" ? redYellowArr.push(key) : 0
				key.color === "Желтый" ? redYellowArr.push(key) : 0
				return redYellowArr
			})
		}

		let whiteYellowArr = [];
		function whiteYellow(flowers) {

			flowers.filter(function (key) {
				key.color === "Белый" ? whiteYellowArr.push(key) : 0
				key.color === "Желтый" ? whiteYellowArr.push(key) : 0
				return whiteYellowArr
			})
		}































		/* Логика < 5*/
		if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			this.renderCards(flowers)
		}

		//do after 2 cveta

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			redWhite(flowers)
			this.renderCards(redWhiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			redYellow(flowers)
			this.renderCards(redYellowArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			whiteYellow(flowers)
			this.renderCards(whiteYellowArr)
		}
		///do after 1 cvet

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active")) {
			redRun(flowers)
			this.renderCards(redArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active")) {
			whiteRun(flowers)
			this.renderCards(whiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && after5.classList.contains("active") && yellow.classList.contains("active")) {
			yellowRun(flowers)
			this.renderCards(yellowArr)
		}



		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			this.renderCards(onlydo5)
		}


		///vse v do i 2 cveta
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			do5Run(flowers)
			redWhite(do5Arr)
			this.renderCards(redWhiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(flowers)
			redYellow(do5Arr)
			this.renderCards(redYellowArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(flowers)
			whiteYellow(do5Arr)
			this.renderCards(whiteYellowArr)
		}

		//vse v after i 2 cveta

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			this.renderCards(onlyafter5)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			after5Run(flowers)
			redWhite(after5Arr)
			this.renderCards(redWhiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(flowers)
			redYellow(after5Arr)
			this.renderCards(redYellowArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(flowers)
			whiteYellow(after5Arr)
			this.renderCards(whiteYellowArr)
		}

		//2 knopki v do i vse cveta
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			do5Run(FlowBukArr)
			this.renderCards(do5Arr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			do5Run(BukCartArr)
			this.renderCards(do5Arr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			do5Run(FlowCartsArr)
			this.renderCards(do5Arr)
		}

		//2 knopki v after i vse cveta

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			after5Run(FlowBukArr)
			this.renderCards(after5Arr)
		}
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			after5Run(BukCartArr)
			this.renderCards(after5Arr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			after5Run(FlowCartsArr)
			this.renderCards(after5Arr)
		}

		//2 knopki v do i 2 cveta

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			FlowBuk()
			do5Run(FlowBukArr)
			redWhite(do5Arr)
			this.renderCards(redWhiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			do5Run(FlowBukArr)
			redYellow(do5Arr)
			this.renderCards(redYellowArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			do5Run(FlowBukArr)
			whiteYellow(do5Arr)
			this.renderCards(whiteYellowArr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			BukCart()
			do5Run(BukCartArr)
			redWhite(do5Arr)
			this.renderCards(redWhiteArr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			do5Run(BukCartArr)
			redYellow(do5Arr)
			this.renderCards(redYellowArr)
		}
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			do5Run(BukCartArr)
			whiteYellow(do5Arr)
			this.renderCards(whiteYellowArr)
		}
		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			FlowCarts()
			do5Run(FlowCartsArr)
			redWhite(do5Arr)
			this.renderCards(redWhiteArr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			do5Run(FlowCartsArr)
			redYellow(do5Arr)
			this.renderCards(redYellowArr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			do5Run(FlowCartsArr)
			whiteYellow(do5Arr)
			this.renderCards(whiteYellowArr)
		}

		//2 knopki v after i 2 cveta

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			FlowBuk()
			after5Run(FlowBukArr)
			redWhite(after5Arr)
			this.renderCards(redWhiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			after5Run(FlowBukArr)
			redYellow(after5Arr)
			this.renderCards(redYellowArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			after5Run(FlowBukArr)
			whiteYellow(after5Arr)
			this.renderCards(whiteYellowArr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			BukCart()
			after5Run(BukCartArr)
			redWhite(after5Arr)
			this.renderCards(redWhiteArr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			after5Run(BukCartArr)
			redYellow(after5Arr)
			this.renderCards(redYellowArr)
		}
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			after5Run(BukCartArr)
			whiteYellow(after5Arr)
			this.renderCards(whiteYellowArr)
		}
		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			FlowCarts()
			after5Run(FlowCartsArr)
			redWhite(after5Arr)
			this.renderCards(redWhiteArr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			after5Run(FlowCartsArr)
			redYellow(after5Arr)
			this.renderCards(redYellowArr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			after5Run(FlowCartsArr)
			whiteYellow(after5Arr)
			this.renderCards(whiteYellowArr)
		}

		///vse knopki v do i 1 cvet
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active")) {
			do5Run(flowers)
			redRun(do5Arr)
			this.renderCards(redArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active")) {
			do5Run(flowers)
			whiteRun(do5Arr)
			this.renderCards(whiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(flowers)
			yellowRun(do5Arr)
			this.renderCards(yellowArr)
		}



		//2 knopki v do i 1 cvet

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active")) {
			FlowBuk()
			do5Run(FlowBukArr)
			redRun(do5Arr)
			this.renderCards(redArr)
		}



		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active")) {
			BukCart()
			do5Run(BukCartArr)
			redRun(do5Arr)
			this.renderCards(redArr)
		}


		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active")) {
			FlowCarts()
			do5Run(FlowCartsArr)
			redRun(do5Arr)
			this.renderCards(redArr)
		}



		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active")) {
			FlowBuk()
			do5Run(FlowBukArr)
			whiteRun(do5Arr)
			this.renderCards(whiteArr)
		}



		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active")) {
			BukCart()
			do5Run(BukCartArr)
			whiteRun(do5Arr)
			this.renderCards(whiteArr)
		}


		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active")) {
			FlowCarts()
			do5Run(FlowCartsArr)
			whiteRun(do5Arr)
			this.renderCards(whiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && do5.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			do5Run(FlowBukArr)
			yellowRun(do5Arr)
			this.renderCards(yellowArr)
		}



		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			do5Run(BukCartArr)
			yellowRun(do5Arr)
			this.renderCards(yellowArr)
		}


		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			do5Run(FlowCartsArr)
			yellowRun(do5Arr)
			this.renderCards(yellowArr)
		}

		///vse knopki v after i 1 cvet
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active")) {
			after5Run(flowers)
			redRun(after5Arr)
			this.renderCards(redArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active")) {
			after5Run(flowers)
			whiteRun(after5Arr)
			this.renderCards(whiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(flowers)
			yellowRun(after5Arr)
			this.renderCards(yellowArr)
		}
		//2 knopki v after i 1 cvet
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active")) {
			FlowBuk()
			after5Run(FlowBukArr)
			redRun(after5Arr)
			this.renderCards(redArr)
		}



		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active")) {
			BukCart()
			after5Run(BukCartArr)
			redRun(after5Arr)
			this.renderCards(redArr)
		}


		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active")) {
			FlowCarts()
			after5Run(FlowCartsArr)
			redRun(after5Arr)
			this.renderCards(redArr)
		}



		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active")) {
			FlowBuk()
			after5Run(FlowBukArr)
			whiteRun(after5Arr)
			this.renderCards(whiteArr)
		}



		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active")) {
			BukCart()
			after5Run(BukCartArr)
			whiteRun(after5Arr)
			this.renderCards(whiteArr)
		}


		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active")) {
			FlowCarts()
			after5Run(FlowCartsArr)
			whiteRun(after5Arr)
			this.renderCards(whiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && after5.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			after5Run(FlowBukArr)
			yellowRun(after5Arr)
			this.renderCards(yellowArr)
		}



		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			after5Run(BukCartArr)
			yellowRun(after5Arr)
			this.renderCards(yellowArr)
		}


		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			after5Run(FlowCartsArr)
			yellowRun(after5Arr)
			this.renderCards(yellowArr)
		}


		//// 1 knopka v do vse cveta
		else if (fbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyFlowers)
			this.renderCards(do5Arr)
		}

		else if (kbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyBuket)
			this.renderCards(do5Arr)
		}

		else if (cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyCarts)
			this.renderCards(do5Arr)
		}

		////1 knopka v do i 2 cveta
		else if (fbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			do5Run(onlyFlowers)
			redWhite(do5Arr)
			this.renderCards(redWhiteArr)
		}
		else if (fbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyFlowers)
			redYellow(do5Arr)
			this.renderCards(redYellowArr)
		}
		else if (fbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyFlowers)
			whiteYellow(do5Arr)
			this.renderCards(whiteYellowArr)
		}

		else if (kbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			do5Run(onlyBuket)
			redWhite(do5Arr)
			this.renderCards(redWhiteArr)
		}
		else if (kbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyBuket)
			redYellow(do5Arr)
			this.renderCards(redYellowArr)
		}
		else if (kbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyBuket)
			whiteYellow(do5Arr)
			this.renderCards(whiteYellowArr)
		}

		else if (cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			do5Run(onlyCarts)
			redWhite(do5Arr)
			this.renderCards(redWhiteArr)
		}
		else if (cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyCarts)
			redYellow(do5Arr)
			this.renderCards(redYellowArr)
		}
		else if (cbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyCarts)
			whiteYellow(do5Arr)
			this.renderCards(whiteYellowArr)
		}
		///1 knopka v do i 1 cvet
		else if (fbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active")) {
			do5Run(onlyFlowers)
			redRun(do5Arr)
			this.renderCards(redArr)
		}
		else if (fbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active")) {
			do5Run(onlyFlowers)
			whiteRun(do5Arr)
			this.renderCards(whiteArr)
		}
		else if (fbut.classList.contains("active") && do5.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyFlowers)
			yellowRun(do5Arr)
			this.renderCards(yellowArr)
		}

		else if (kbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active")) {
			do5Run(onlyBuket)
			redRun(do5Arr)
			this.renderCards(redArr)
		}
		else if (kbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active")) {
			do5Run(onlyBuket)
			whiteRun(do5Arr)
			this.renderCards(whiteArr)
		}
		else if (kbut.classList.contains("active") && do5.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyBuket)
			yellowRun(do5Arr)
			this.renderCards(yellowArr)
		}
		else if (cbut.classList.contains("active") && do5.classList.contains("active") && red.classList.contains("active")) {
			do5Run(onlyCarts)
			redRun(do5Arr)
			this.renderCards(redArr)
		}
		else if (cbut.classList.contains("active") && do5.classList.contains("active") && white.classList.contains("active")) {
			do5Run(onlyCarts)
			whiteRun(do5Arr)
			this.renderCards(whiteArr)
		}
		else if (cbut.classList.contains("active") && do5.classList.contains("active") && yellow.classList.contains("active")) {
			do5Run(onlyCarts)
			yellowRun(do5Arr)
			this.renderCards(yellowArr)
		}


		///////////////////////////////

		//// 1 knopka v after vse cveta
		else if (fbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyFlowers)
			this.renderCards(after5Arr)
		}

		else if (kbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyBuket)
			this.renderCards(after5Arr)
		}

		else if (cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyCarts)
			this.renderCards(after5Arr)
		}

		////1 knopka v after i 2 cveta
		else if (fbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			after5Run(onlyFlowers)
			redWhite(after5Arr)
			this.renderCards(redWhiteArr)
		}
		else if (fbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyFlowers)
			redYellow(after5Arr)
			this.renderCards(redYellowArr)
		}
		else if (fbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyFlowers)
			whiteYellow(after5Arr)
			this.renderCards(whiteYellowArr)
		}

		else if (kbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			after5Run(onlyBuket)
			redWhite(after5Arr)
			this.renderCards(redWhiteArr)
		}
		else if (kbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyBuket)
			redYellow(after5Arr)
			this.renderCards(redYellowArr)
		}
		else if (kbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyBuket)
			whiteYellow(after5Arr)
			this.renderCards(whiteYellowArr)
		}

		else if (cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			after5Run(onlyCarts)
			redWhite(after5Arr)
			this.renderCards(redWhiteArr)
		}
		else if (cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyCarts)
			redYellow(after5Arr)
			this.renderCards(redYellowArr)
		}
		else if (cbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyCarts)
			whiteYellow(after5Arr)
			this.renderCards(whiteYellowArr)
		}
		///1 knopka v after i 1 cvet
		else if (fbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active")) {
			after5Run(onlyFlowers)
			redRun(after5Arr)
			this.renderCards(redArr)
		}
		else if (fbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active")) {
			after5Run(onlyFlowers)
			whiteRun(after5Arr)
			this.renderCards(whiteArr)
		}
		else if (fbut.classList.contains("active") && after5.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyFlowers)
			yellowRun(after5Arr)
			this.renderCards(yellowArr)
		}

		else if (kbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active")) {
			after5Run(onlyBuket)
			redRun(after5Arr)
			this.renderCards(redArr)
		}
		else if (kbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active")) {
			after5Run(onlyBuket)
			whiteRun(after5Arr)
			this.renderCards(whiteArr)
		}
		else if (kbut.classList.contains("active") && after5.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyBuket)
			yellowRun(after5Arr)
			this.renderCards(yellowArr)
		}
		else if (cbut.classList.contains("active") && after5.classList.contains("active") && red.classList.contains("active")) {
			after5Run(onlyCarts)
			redRun(after5Arr)
			this.renderCards(redArr)
		}
		else if (cbut.classList.contains("active") && after5.classList.contains("active") && white.classList.contains("active")) {
			after5Run(onlyCarts)
			whiteRun(after5Arr)
			this.renderCards(whiteArr)
		}
		else if (cbut.classList.contains("active") && after5.classList.contains("active") && yellow.classList.contains("active")) {
			after5Run(onlyCarts)
			yellowRun(after5Arr)
			this.renderCards(yellowArr)
		}


		///3 knopki + do
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active") && after5.classList.contains("active")) {

			this.renderCards(flowers)
		}


		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active")) {
			do5Run(flowers)
			this.renderCards(do5Arr)
		}
		///3 knopki + after
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active")) {
			after5Run(flowers)
			this.renderCards(after5Arr)
		}
		/// 2 knopki + do
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && do5.classList.contains("active")) {
			FlowBuk()
			do5Run(FlowBukArr)
			this.renderCards(do5Arr)
		}
		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active")) {
			FlowCarts()
			do5Run(FlowCartsArr)
			this.renderCards(do5Arr)
		}
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && do5.classList.contains("active")) {
			BukCart()
			do5Run(BukCartArr)
			this.renderCards(do5Arr)
		}
		// 2 knopki + after
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && after5.classList.contains("active")) {
			FlowBuk()
			after5Run(FlowBukArr)
			this.renderCards(after5Arr)
		}
		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active")) {
			FlowCarts()
			after5Run(FlowCartsArr)
			this.renderCards(after5Arr)
		}
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && after5.classList.contains("active")) {
			BukCart()
			after5Run(BukCartArr)
			this.renderCards(after5Arr)
		}
		////1 k v do
		else if (fbut.classList.contains("active") && do5.classList.contains("active")) {

			do5Run(onlyFlowers)
			this.renderCards(do5Arr)
		}
		else if (kbut.classList.contains("active") && do5.classList.contains("active")) {

			do5Run(onlyBuket)
			this.renderCards(do5Arr)
		}
		else if (cbut.classList.contains("active") && do5.classList.contains("active")) {
			do5Run(onlyCarts)
			this.renderCards(do5Arr)
		}
		////1 k v after

		else if (fbut.classList.contains("active") && after5.classList.contains("active")) {

			after5Run(onlyFlowers)
			this.renderCards(after5Arr)
		}
		else if (kbut.classList.contains("active") && after5.classList.contains("active")) {

			after5Run(onlyBuket)
			this.renderCards(after5Arr)
		}
		else if (cbut.classList.contains("active") && after5.classList.contains("active")) {
			after5Run(onlyCarts)
			this.renderCards(after5Arr)
		}


		///// vse i vse cvet
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			this.renderCards(flowers)
		}
		//////////2 k i 2 cveta
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			FlowBuk()
			redWhite(FlowBukArr)
			this.renderCards(redWhiteArr)
		}
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			redYellow(FlowBukArr)
			this.renderCards(redYellowArr)
		}
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			whiteYellow(FlowBukArr)
			this.renderCards(whiteYellowArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			FlowBuk()
			redWhite(FlowBukArr)
			this.renderCards(redWhiteArr)
		}
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			redYellow(FlowBukArr)
			this.renderCards(redYellowArr)
		}
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			whiteYellow(FlowBukArr)
			this.renderCards(whiteYellowArr)
		}

		//
		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			FlowCarts()
			redWhite(FlowCartsArr)
			this.renderCards(redWhiteArr)
		}
		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			redYellow(FlowCartsArr)
			this.renderCards(redYellowArr)
		}
		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			whiteYellow(FlowCartsArr)
			this.renderCards(whiteYellowArr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			FlowCarts()
			redWhite(FlowCartsArr)
			this.renderCards(redWhiteArr)
		}
		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			redYellow(FlowCartsArr)
			this.renderCards(redYellowArr)
		}
		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			whiteYellow(FlowCartsArr)
			this.renderCards(whiteYellowArr)
		}

		//
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			BukCart()
			redWhite(BukCartArr)
			this.renderCards(redWhiteArr)
		}
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			redYellow(BukCartArr)
			this.renderCards(redYellowArr)
		}
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			whiteYellow(BukCartArr)
			this.renderCards(whiteYellowArr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {
			BukCart()
			redWhite(BukCartArr)
			this.renderCards(redWhiteArr)
		}
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			redYellow(BukCartArr)
			this.renderCards(redYellowArr)
		}
		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			whiteYellow(BukCartArr)
			this.renderCards(whiteYellowArr)
		}


		///vse i cvet
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active")) {
			redRun(flowers)
			this.renderCards(redArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && yellow.classList.contains("active")) {
			yellowRun(flowers)
			this.renderCards(yellowArr)
		}
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active") && white.classList.contains("active")) {
			whiteRun(flowers)
			this.renderCards(whiteArr)
		}

		////2 i cvet
		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && red.classList.contains("active")) {
			FlowBuk()
			redRun(FlowBukArr)
			this.renderCards(redArr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active")) {
			FlowCarts()
			redRun(FlowCartsArr)
			this.renderCards(redArr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && red.classList.contains("active")) {
			BukCart()
			redRun(BukCartArr)
			this.renderCards(redArr)
		}



		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && white.classList.contains("active")) {
			FlowBuk()
			whiteRun(FlowBukArr)
			this.renderCards(whiteArr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && white.classList.contains("active")) {
			FlowCarts()
			whiteRun(FlowCartsArr)
			this.renderCards(whiteArr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && white.classList.contains("active")) {
			BukCart()
			whiteRun(BukCartArr)
			this.renderCards(whiteArr)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && yellow.classList.contains("active")) {
			FlowBuk()
			yellowRun(FlowBukArr)
			this.renderCards(yellowArr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active") && yellow.classList.contains("active")) {
			FlowCarts()
			yellowRun(FlowCartsArr)
			this.renderCards(yellowArr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active") && yellow.classList.contains("active")) {
			BukCart()
			yellowRun(BukCartArr)
			this.renderCards(yellowArr)
		}


		//////1 k i 2 cveta

		else if (fbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			this.renderCards(onlyFlowers)
		}

		else if (kbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			this.renderCards(onlyBuket)
		}
		else if (cbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {
			this.renderCards(onlyCarts)
		}

		else if (fbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {

			redWhite(onlyFlowers)
			this.renderCards(redWhiteArr)
		} else if (fbut.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {

			redYellow(onlyFlowers)
			this.renderCards(redYellowArr)
		}
		else if (fbut.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {

			whiteYellow(onlyFlowers)
			this.renderCards(whiteYellowArr)
		}
		else if (kbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {

			redWhite(onlyBuket)
			this.renderCards(redWhiteArr)
		} else if (kbut.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {

			redYellow(onlyBuket)
			this.renderCards(redYellowArr)
		}
		else if (kbut.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {

			whiteYellow(onlyBuket)
			this.renderCards(whiteYellowArr)
		}
		else if (cbut.classList.contains("active") && red.classList.contains("active") && white.classList.contains("active")) {

			redWhite(onlyCarts)
			this.renderCards(redWhiteArr)
		} else if (cbut.classList.contains("active") && red.classList.contains("active") && yellow.classList.contains("active")) {

			redYellow(onlyCarts)
			this.renderCards(redYellowArr)
		}
		else if (cbut.classList.contains("active") && white.classList.contains("active") && yellow.classList.contains("active")) {

			whiteYellow(onlyCarts)
			this.renderCards(whiteYellowArr)
		}


		////1 i cvet
		else if (fbut.classList.contains("active") && red.classList.contains("active")) {

			redRun(onlyFlowers)
			this.renderCards(redArr)
		} else if (fbut.classList.contains("active") && white.classList.contains("active")) {

			whiteRun(onlyFlowers)
			this.renderCards(whiteArr)
		} else if (fbut.classList.contains("active") && yellow.classList.contains("active")) {

			yellowRun(onlyFlowers)
			this.renderCards(yellowArr)
		}


		else if (kbut.classList.contains("active") && red.classList.contains("active")) {

			redRun(onlyBuket)
			this.renderCards(redArr)
		} else if (kbut.classList.contains("active") && white.classList.contains("active")) {

			whiteRun(onlyBuket)
			this.renderCards(whiteArr)
		} else if (kbut.classList.contains("active") && yellow.classList.contains("active")) {

			yellowRun(onlyBuket)
			this.renderCards(yellowArr)
		}

		else if (cbut.classList.contains("active") && red.classList.contains("active")) {

			redRun(onlyCarts)
			this.renderCards(redArr)
		} else if (cbut.classList.contains("active") && white.classList.contains("active")) {

			whiteRun(onlyCarts)
			this.renderCards(whiteArr)
		} else if (cbut.classList.contains("active") && yellow.classList.contains("active")) {

			yellowRun(onlyCarts)
			this.renderCards(yellowArr)
		}
		///////////////


		else if (fbut.classList.contains("active") && kbut.classList.contains("active") && cbut.classList.contains("active")) {

			this.renderCards(flowers)
		}

		else if (fbut.classList.contains("active") && kbut.classList.contains("active")) {
			FlowBuk()
			this.renderCards(FlowBukArr)
		}

		else if (fbut.classList.contains("active") && cbut.classList.contains("active")) {
			FlowCarts()
			this.renderCards(FlowCartsArr)
		}

		else if (kbut.classList.contains("active") && cbut.classList.contains("active")) {
			BukCart()
			this.renderCards(BukCartArr)
		}















		else if (fbut.classList.contains("active")) {

			this.renderCards(onlyFlowers)
		}

		else if (kbut.classList.contains("active")) {

			this.renderCards(onlyBuket)
		}

		else if (cbut.classList.contains("active")) {

			this.renderCards(onlyCarts)
		}



	}







}





export default Render;

