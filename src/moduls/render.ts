import flowers from './flowers';
import '../style.css';

const card = document.querySelector('.produkt-catalog') as HTMLElement;

const fbut = document.querySelector('.flow') as HTMLElement;
const kbut = document.querySelector('.bucket') as HTMLElement;
const cbut = document.querySelector('.carts') as HTMLElement;
const do5 = document.querySelector('.do5') as HTMLElement;
const after5 = document.querySelector('.after5') as HTMLElement;
const red = document.querySelector('.red') as HTMLElement;
const white = document.querySelector('.white') as HTMLElement;
const yellow = document.querySelector('.yellow') as HTMLElement;

const sliders = document.querySelectorAll('input[type="range"]');
const stepleft = document.querySelector('.stepleft') as HTMLElement;
const stepright = document.querySelector('.stepright') as HTMLElement;
const stepleft1 = document.querySelector('.stepleft1') as HTMLElement;
const stepright1 = document.querySelector('.stepright1') as HTMLElement;

const sortab = document.querySelector('.sortab') as HTMLElement;
const sort12 = document.querySelector('.sort12') as HTMLElement;
const sortba = document.querySelector('.sortba') as HTMLElement;
const sort21 = document.querySelector('.sort21') as HTMLElement;
const sbros = document.querySelector('.sbros') as HTMLElement;
const searchValue = document.querySelector('input[type="search"]') as HTMLObjectElement;
const searchbtn = document.querySelector('.fas') as HTMLElement;

interface Icard {
    name: string;
    img: string;
    type: string;
    but: string;
    color: string;
    much: string;
    flength: string;
    popular: string;
}

const cardsD: Icard[] = [];

class Render {
    flowers: Icard[];
    constructor(flowers: Icard[]) {
        this.flowers = flowers;

        searchbtn.addEventListener('click', (e) => {
            this.search(e);
        });

        sbros.addEventListener('click', (e) => {
            this.sbros(e);
        });

        sortab.addEventListener('click', (e) => {
            this.sort(e);
        });

        sort12.addEventListener('click', (e) => {
            this.sort(e);
        });

        sortba.addEventListener('click', (e) => {
            this.sort(e);
        });

        sort21.addEventListener('click', (e) => {
            this.sort(e);
        });

        sliders[0].addEventListener('input', () => {
            this.diapozon();
        });

        sliders[1].addEventListener('input', () => {
            this.diapozon();
        });
        sliders[2].addEventListener('input', () => {
            this.diapozon();
        });

        sliders[3].addEventListener('input', () => {
            this.diapozon();
        });

        (document.querySelector('.flow') as HTMLElement).addEventListener('click', (e) => {
            this.filter(e);
        });
        kbut.addEventListener('click', (e) => {
            this.filter(e);
        });

        cbut.addEventListener('click', (e) => {
            this.filter(e);
        });

        do5.addEventListener('click', (e) => {
            after5.classList.remove('active');
            do5.classList.toggle('active');
            this.filter(e);
        });

        after5.addEventListener('click', (e) => {
            do5.classList.remove('active');
            after5.classList.toggle('active');
            this.filter(e);
        });

        red.addEventListener('click', (e) => {
            red.classList.toggle('active');
            this.filter(e);
        });

        white.addEventListener('click', (e) => {
            white.classList.toggle('active');
            this.filter(e);
        });

        yellow.addEventListener('click', (e) => {
            yellow.classList.toggle('active');
            this.filter(e);
        });
    }

    renderCards(flowers: Icard[]) {
        const newdiv = document.createElement('div');
        newdiv.classList.add('ggd');
        cardsD.length = 0;
        flowers.forEach(function (key) {
            const cards = `<div class="catalog-card">
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
	</div>`;

            newdiv.insertAdjacentHTML('afterbegin', cards);

            cardsD.push(key);

            return newdiv;
        });

        card.replaceChildren(newdiv);

        const cart = document.querySelector('.items') as HTMLTemplateElement;
        let a = 0;
        for (const item of Object(document.getElementsByClassName('catalog-card'))) {
            if (item.style.display !== 'none')
                item.addEventListener('click', function () {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                        a--;
                        cart.innerHTML = `${a}`;
                    } else {
                        item.classList.add('active');
                        a++;
                        cart.innerHTML = `${a}`;
                    }
                    if (a > 10) {
                        alert('Извините, все слоты заполнены');
                        item.classList.remove('active');
                        a = 10;
                    }
                });
        }
    }

    renderCardsD(flowers: Icard[]) {
        const newdiv = document.createElement('div');
        newdiv.classList.add('ggd');

        flowers.forEach(function (key) {
            const cards = `<div class="catalog-card">
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
	</div>`;

            newdiv.insertAdjacentHTML('afterbegin', cards);

            return newdiv;
        });

        card.replaceChildren(newdiv);

        const cart = document.querySelector('.items') as HTMLTemplateElement;
        let a = 0;

        for (const item of Object(document.getElementsByClassName('catalog-card'))) {
            if (item.style.display !== 'none')
                item.addEventListener('click', function () {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                        a--;
                        cart.innerHTML = `${a}`;
                    } else {
                        item.classList.add('active');
                        a++;
                        cart.innerHTML = `${a}`;
                    }
                });
        }
    }

    search(e: MouseEvent) {
        if (Object(e).target.classList.contains('fas')) {
            const searchArr = cardsD.filter((key) =>
                key.name.toLowerCase().includes(Object(searchValue).value.toLowerCase())
            );
            this.renderCardsD(searchArr);

            if (searchArr.length === 0) {
                alert('Извините,совпадений не найдено...Sorry...');
                this.renderCardsD(cardsD);
            }
        }
    }

    sbros(e: MouseEvent) {
        if (Object(e).target.classList.contains('sbros')) {
            sortba.classList.remove('active');
            sortab.classList.remove('active');
            sort12.classList.remove('active');
            sort21.classList.remove('active');
            fbut.classList.remove('active');
            kbut.classList.remove('active');
            cbut.classList.remove('active');
            do5.classList.remove('active');
            after5.classList.remove('active');
            red.classList.remove('active');
            white.classList.remove('active');
            yellow.classList.remove('active');
            Object(sliders[0]).value = 0;
            Object(sliders[1]).value = 15;
            Object(sliders[2]).value = 10;
            Object(sliders[3]).value = 45;
            stepleft.innerHTML = '0';
            stepright.innerHTML = '15';
            stepright1.innerHTML = '45';
            stepleft1.innerHTML = '10';
            Object(searchValue).value = '';
            this.renderCards(flowers);
        }
    }

    sort(e: MouseEvent) {
        if (Object(e).target.classList.contains('sortab')) {
            sortab.classList.toggle('active');
            sortba.classList.remove('active');
            const sortArr = cardsD.sort((a, b) => (b.name > a.name ? 1 : -1));

            this.renderCardsD(sortArr);
        }

        if (Object(e).target.classList.contains('sort12')) {
            sort12.classList.toggle('active');
            sort21.classList.remove('active');
            const sortArr = cardsD.sort((a, b) => (b.much > a.much ? 1 : -1));

            this.renderCardsD(sortArr);
        }

        if (Object(e).target.classList.contains('sortba')) {
            sortba.classList.toggle('active');
            sortab.classList.remove('active');
            const sortArr = cardsD.sort((a, b) => (a.name > b.name ? 1 : -1));

            this.renderCardsD(sortArr);
        }
        if (Object(e).target.classList.contains('sort21')) {
            sort21.classList.toggle('active');
            sort12.classList.remove('active');
            const sortArr = cardsD.sort((a, b) => (a.much > b.much ? 1 : -1));

            this.renderCardsD(sortArr);
        }
    }

    diapozon() {
        if (Object(+sliders[1]).value < Object(+sliders[0]).value) {
            Object(sliders[0]).value = Object(+sliders[1]).value;
        }

        if (Object(+sliders[0]).value > Object(+sliders[1]).value) {
            Object(sliders[1]).value = Object(+sliders[0]).value;
        }

        if (Object(+sliders[3]).value < Object(+sliders[2]).value) {
            Object(sliders[2]).value = Object(+sliders[3]).value;
        }

        if (Object(+sliders[2]).value > Object(+sliders[3]).value) {
            Object(sliders[3]).value = Object(+sliders[2]).value;
        }

        sliders.forEach((slider) => {
            slider.addEventListener('change', () => {
                stepleft.innerHTML = Object(sliders[0]).value;
                stepright.innerHTML = Object(sliders[1]).value;

                const diap = cardsD.filter(
                    (key) =>
                        Object(sliders[0]).value <= Object(key).much / 1 &&
                        Object(key).much / 1 <= Object(sliders[1]).value
                );

                stepleft1.innerHTML = Object(sliders[2]).value;
                stepright1.innerHTML = Object(sliders[3]).value;

                const flength = diap.filter(
                    (key) => Object(sliders[2]).value <= key.flength && key.flength <= Object(sliders[3]).value
                );
                this.renderCardsD(flength);
            });
        });
    }

    filter(e: MouseEvent) {
        /* Фильтры по кнопкам вида цветов */

        if (Object(e).target.classList.contains('flow')) {
            console.log('doToggle');
            fbut.classList.toggle('active');
            console.log('afterToggle');
            const onlyFlowers = fbut.classList.contains('active')
                ? flowers.filter((key) => key.type === 'Цветы')
                : flowers;
            this.renderCards(onlyFlowers);
        }

        if (Object(e).target.classList.contains('bucket')) {
            kbut.classList.toggle('active');
            const onlyBuket = kbut.classList.contains('active')
                ? flowers.filter((key) => key.type === 'Букет')
                : flowers;
            this.renderCards(onlyBuket);
        }

        if (Object(e).target.classList.contains('carts')) {
            cbut.classList.toggle('active');
            const onlyCarts = cbut.classList.contains('active')
                ? flowers.filter((key) => key.type === 'Корзинка')
                : flowers;
            this.renderCards(onlyCarts);
        }

        /* Меньше 5 см */

        if (Object(e).target.classList.contains('do5')) {
            const onlydo5 = do5.classList.contains('active')
                ? flowers.filter((key) => key.but === 'Меньше 5см.')
                : flowers;
            this.renderCards(onlydo5);
        }

        /* Больше 5 */

        if (Object(e).target.classList.contains('after5')) {
            const onlyafter5 = after5.classList.contains('active')
                ? flowers.filter((key) => key.but === 'Больше 5см.')
                : flowers;
            this.renderCards(onlyafter5);
        }

        /* Логика red */

        if (Object(e).target.classList.contains('red')) {
            const onlyRed = red.classList.contains('active')
                ? flowers.filter((key) => key.color === 'Красный')
                : flowers;
            this.renderCards(onlyRed);
        }
        if (Object(e).target.classList.contains('white')) {
            const onlyWhite = white.classList.contains('active')
                ? flowers.filter((key) => key.color === 'Белый')
                : flowers;
            this.renderCards(onlyWhite);
        }
        if (Object(e).target.classList.contains('yellow')) {
            const onlyYellow = yellow.classList.contains('active')
                ? flowers.filter((key) => key.color === 'Желтый')
                : flowers;
            this.renderCards(onlyYellow);
        }

        ///////////////////////////////////////////////

        const onlyFlowers = fbut.classList.contains('active') ? flowers.filter((key) => key.type === 'Цветы') : flowers;
        const onlyBuket = kbut.classList.contains('active') ? flowers.filter((key) => key.type === 'Букет') : flowers;
        const onlyCarts = cbut.classList.contains('active')
            ? flowers.filter((key) => key.type === 'Корзинка')
            : flowers;
        const onlydo5 = do5.classList.contains('active') ? flowers.filter((key) => key.but === 'Меньше 5см.') : flowers;
        const onlyafter5 = after5.classList.contains('active')
            ? flowers.filter((key) => key.but === 'Больше 5см.')
            : flowers;

        const FlowCartsArr: Icard[] = [];
        function FlowCarts() {
            flowers.filter(function (key) {
                key.type === 'Корзинка' ? FlowCartsArr.push(key) : 0;
                key.type === 'Цветы' ? FlowCartsArr.push(key) : 0;
                return FlowCartsArr;
            });
        }

        const FlowBukArr: Icard[] = [];
        function FlowBuk() {
            flowers.filter(function (key) {
                key.type === 'Букет' ? FlowBukArr.push(key) : 0;
                key.type === 'Цветы' ? FlowBukArr.push(key) : 0;
                return FlowBukArr;
            });
        }

        const BukCartArr: Icard[] = [];
        function BukCart() {
            flowers.filter(function (key) {
                key.type === 'Букет' ? BukCartArr.push(key) : 0;
                key.type === 'Корзинка' ? BukCartArr.push(key) : 0;
                return BukCartArr;
            });
        }

        const do5Arr: Icard[] = [];
        function do5Run(flowers: Icard[]) {
            flowers.filter(function (key) {
                key.but === 'Меньше 5см.' ? do5Arr.push(key) : 0;
                return do5Arr;
            });
        }

        const after5Arr: Icard[] = [];
        function after5Run(flowers: Icard[]) {
            flowers.filter(function (key) {
                key.but === 'Больше 5см.' ? after5Arr.push(key) : 0;
                return do5Arr;
            });
        }

        const redArr: Icard[] = [];
        function redRun(flowers: Icard[]) {
            flowers.filter(function (key) {
                key.color === 'Красный' ? redArr.push(key) : 0;
                return redArr;
            });
        }

        const whiteArr: Icard[] = [];
        function whiteRun(flowers: Icard[]) {
            flowers.filter(function (key) {
                key.color === 'Белый' ? whiteArr.push(key) : 0;
                return whiteArr;
            });
        }

        const yellowArr: Icard[] = [];
        function yellowRun(flowers: Icard[]) {
            flowers.filter(function (key) {
                key.color === 'Желтый' ? yellowArr.push(key) : 0;
                return yellowArr;
            });
        }

        const redWhiteArr: Icard[] = [];
        function redWhite(flowers: Icard[]) {
            flowers.filter(function (key) {
                key.color === 'Красный' ? redWhiteArr.push(key) : 0;
                key.color === 'Белый' ? redWhiteArr.push(key) : 0;
                return redWhiteArr;
            });
        }

        const redYellowArr: Icard[] = [];
        function redYellow(flowers: Icard[]) {
            flowers.filter(function (key) {
                key.color === 'Красный' ? redYellowArr.push(key) : 0;
                key.color === 'Желтый' ? redYellowArr.push(key) : 0;
                return redYellowArr;
            });
        }

        const whiteYellowArr: Icard[] = [];
        function whiteYellow(flowers: Icard[]) {
            flowers.filter(function (key) {
                key.color === 'Белый' ? whiteYellowArr.push(key) : 0;
                key.color === 'Желтый' ? whiteYellowArr.push(key) : 0;
                return whiteYellowArr;
            });
        }

        /* Логика < 5*/
        if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            this.renderCards(flowers);
        }

        //do after 2 cveta
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            redWhite(flowers);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            redYellow(flowers);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            whiteYellow(flowers);
            this.renderCards(whiteYellowArr);
        }
        ///do after 1 cvet
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            redRun(flowers);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            whiteRun(flowers);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            after5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            yellowRun(flowers);
            this.renderCards(yellowArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            this.renderCards(onlydo5);
        }

        ///vse v do i 2 cveta
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            do5Run(flowers);
            redWhite(do5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(flowers);
            redYellow(do5Arr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(flowers);
            whiteYellow(do5Arr);
            this.renderCards(whiteYellowArr);
        }

        //vse v after i 2 cveta
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            this.renderCards(onlyafter5);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            after5Run(flowers);
            redWhite(after5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(flowers);
            redYellow(after5Arr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(flowers);
            whiteYellow(after5Arr);
            this.renderCards(whiteYellowArr);
        }

        //2 knopki v do i vse cveta
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            do5Run(FlowBukArr);
            this.renderCards(do5Arr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            do5Run(BukCartArr);
            this.renderCards(do5Arr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            do5Run(FlowCartsArr);
            this.renderCards(do5Arr);
        }

        //2 knopki v after i vse cveta
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            after5Run(FlowBukArr);
            this.renderCards(after5Arr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            after5Run(BukCartArr);
            this.renderCards(after5Arr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            after5Run(FlowCartsArr);
            this.renderCards(after5Arr);
        }

        //2 knopki v do i 2 cveta
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowBuk();
            do5Run(FlowBukArr);
            redWhite(do5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            do5Run(FlowBukArr);
            redYellow(do5Arr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            do5Run(FlowBukArr);
            whiteYellow(do5Arr);
            this.renderCards(whiteYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            BukCart();
            do5Run(BukCartArr);
            redWhite(do5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            do5Run(BukCartArr);
            redYellow(do5Arr);
            this.renderCards(redYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            do5Run(BukCartArr);
            whiteYellow(do5Arr);
            this.renderCards(whiteYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowCarts();
            do5Run(FlowCartsArr);
            redWhite(do5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            do5Run(FlowCartsArr);
            redYellow(do5Arr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            do5Run(FlowCartsArr);
            whiteYellow(do5Arr);
            this.renderCards(whiteYellowArr);
        }

        //2 knopki v after i 2 cveta
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowBuk();
            after5Run(FlowBukArr);
            redWhite(after5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            after5Run(FlowBukArr);
            redYellow(after5Arr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            after5Run(FlowBukArr);
            whiteYellow(after5Arr);
            this.renderCards(whiteYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            BukCart();
            after5Run(BukCartArr);
            redWhite(after5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            after5Run(BukCartArr);
            redYellow(after5Arr);
            this.renderCards(redYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            after5Run(BukCartArr);
            whiteYellow(after5Arr);
            this.renderCards(whiteYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowCarts();
            after5Run(FlowCartsArr);
            redWhite(after5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            after5Run(FlowCartsArr);
            redYellow(after5Arr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            after5Run(FlowCartsArr);
            whiteYellow(after5Arr);
            this.renderCards(whiteYellowArr);
        }

        ///vse knopki v do i 1 cvet
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            do5Run(flowers);
            redRun(do5Arr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            do5Run(flowers);
            whiteRun(do5Arr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(flowers);
            yellowRun(do5Arr);
            this.renderCards(yellowArr);
        }

        //2 knopki v do i 1 cvet
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            FlowBuk();
            do5Run(FlowBukArr);
            redRun(do5Arr);
            this.renderCards(redArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            BukCart();
            do5Run(BukCartArr);
            redRun(do5Arr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            FlowCarts();
            do5Run(FlowCartsArr);
            redRun(do5Arr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowBuk();
            do5Run(FlowBukArr);
            whiteRun(do5Arr);
            this.renderCards(whiteArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            BukCart();
            do5Run(BukCartArr);
            whiteRun(do5Arr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowCarts();
            do5Run(FlowCartsArr);
            whiteRun(do5Arr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            do5Run(FlowBukArr);
            yellowRun(do5Arr);
            this.renderCards(yellowArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            do5Run(BukCartArr);
            yellowRun(do5Arr);
            this.renderCards(yellowArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            do5Run(FlowCartsArr);
            yellowRun(do5Arr);
            this.renderCards(yellowArr);
        }

        ///vse knopki v after i 1 cvet
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            after5Run(flowers);
            redRun(after5Arr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            after5Run(flowers);
            whiteRun(after5Arr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(flowers);
            yellowRun(after5Arr);
            this.renderCards(yellowArr);
        }
        //2 knopki v after i 1 cvet
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            FlowBuk();
            after5Run(FlowBukArr);
            redRun(after5Arr);
            this.renderCards(redArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            BukCart();
            after5Run(BukCartArr);
            redRun(after5Arr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            FlowCarts();
            after5Run(FlowCartsArr);
            redRun(after5Arr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowBuk();
            after5Run(FlowBukArr);
            whiteRun(after5Arr);
            this.renderCards(whiteArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            BukCart();
            after5Run(BukCartArr);
            whiteRun(after5Arr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowCarts();
            after5Run(FlowCartsArr);
            whiteRun(after5Arr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            after5Run(FlowBukArr);
            yellowRun(after5Arr);
            this.renderCards(yellowArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            after5Run(BukCartArr);
            yellowRun(after5Arr);
            this.renderCards(yellowArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            after5Run(FlowCartsArr);
            yellowRun(after5Arr);
            this.renderCards(yellowArr);
        }

        //// 1 knopka v do vse cveta
        else if (
            fbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyFlowers);
            this.renderCards(do5Arr);
        } else if (
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyBuket);
            this.renderCards(do5Arr);
        } else if (
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyCarts);
            this.renderCards(do5Arr);
        }

        ////1 knopka v do i 2 cveta
        else if (
            fbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            do5Run(onlyFlowers);
            redWhite(do5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyFlowers);
            redYellow(do5Arr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyFlowers);
            whiteYellow(do5Arr);
            this.renderCards(whiteYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            do5Run(onlyBuket);
            redWhite(do5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyBuket);
            redYellow(do5Arr);
            this.renderCards(redYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyBuket);
            whiteYellow(do5Arr);
            this.renderCards(whiteYellowArr);
        } else if (
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            do5Run(onlyCarts);
            redWhite(do5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyCarts);
            redYellow(do5Arr);
            this.renderCards(redYellowArr);
        } else if (
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyCarts);
            whiteYellow(do5Arr);
            this.renderCards(whiteYellowArr);
        }
        ///1 knopka v do i 1 cvet
        else if (
            fbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            do5Run(onlyFlowers);
            redRun(do5Arr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            do5Run(onlyFlowers);
            whiteRun(do5Arr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyFlowers);
            yellowRun(do5Arr);
            this.renderCards(yellowArr);
        } else if (
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            do5Run(onlyBuket);
            redRun(do5Arr);
            this.renderCards(redArr);
        } else if (
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            do5Run(onlyBuket);
            whiteRun(do5Arr);
            this.renderCards(whiteArr);
        } else if (
            kbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyBuket);
            yellowRun(do5Arr);
            this.renderCards(yellowArr);
        } else if (
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            do5Run(onlyCarts);
            redRun(do5Arr);
            this.renderCards(redArr);
        } else if (
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            do5Run(onlyCarts);
            whiteRun(do5Arr);
            this.renderCards(whiteArr);
        } else if (
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            do5Run(onlyCarts);
            yellowRun(do5Arr);
            this.renderCards(yellowArr);
        }

        ///////////////////////////////

        //// 1 knopka v after vse cveta
        else if (
            fbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyFlowers);
            this.renderCards(after5Arr);
        } else if (
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyBuket);
            this.renderCards(after5Arr);
        } else if (
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyCarts);
            this.renderCards(after5Arr);
        }

        ////1 knopka v after i 2 cveta
        else if (
            fbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            after5Run(onlyFlowers);
            redWhite(after5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyFlowers);
            redYellow(after5Arr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyFlowers);
            whiteYellow(after5Arr);
            this.renderCards(whiteYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            after5Run(onlyBuket);
            redWhite(after5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyBuket);
            redYellow(after5Arr);
            this.renderCards(redYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyBuket);
            whiteYellow(after5Arr);
            this.renderCards(whiteYellowArr);
        } else if (
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            after5Run(onlyCarts);
            redWhite(after5Arr);
            this.renderCards(redWhiteArr);
        } else if (
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyCarts);
            redYellow(after5Arr);
            this.renderCards(redYellowArr);
        } else if (
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyCarts);
            whiteYellow(after5Arr);
            this.renderCards(whiteYellowArr);
        }
        ///1 knopka v after i 1 cvet
        else if (
            fbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            after5Run(onlyFlowers);
            redRun(after5Arr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            after5Run(onlyFlowers);
            whiteRun(after5Arr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyFlowers);
            yellowRun(after5Arr);
            this.renderCards(yellowArr);
        } else if (
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            after5Run(onlyBuket);
            redRun(after5Arr);
            this.renderCards(redArr);
        } else if (
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            after5Run(onlyBuket);
            whiteRun(after5Arr);
            this.renderCards(whiteArr);
        } else if (
            kbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyBuket);
            yellowRun(after5Arr);
            this.renderCards(yellowArr);
        } else if (
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            after5Run(onlyCarts);
            redRun(after5Arr);
            this.renderCards(redArr);
        } else if (
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            after5Run(onlyCarts);
            whiteRun(after5Arr);
            this.renderCards(whiteArr);
        } else if (
            cbut.classList.contains('active') &&
            after5.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            after5Run(onlyCarts);
            yellowRun(after5Arr);
            this.renderCards(yellowArr);
        }

        ///3 knopki + do
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active') &&
            after5.classList.contains('active')
        ) {
            this.renderCards(flowers);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active')
        ) {
            do5Run(flowers);
            this.renderCards(do5Arr);
        }
        ///3 knopki + after
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active')
        ) {
            after5Run(flowers);
            this.renderCards(after5Arr);
        }
        /// 2 knopki + do
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            do5.classList.contains('active')
        ) {
            FlowBuk();
            do5Run(FlowBukArr);
            this.renderCards(do5Arr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active')
        ) {
            FlowCarts();
            do5Run(FlowCartsArr);
            this.renderCards(do5Arr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            do5.classList.contains('active')
        ) {
            BukCart();
            do5Run(BukCartArr);
            this.renderCards(do5Arr);
        }
        // 2 knopki + after
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            after5.classList.contains('active')
        ) {
            FlowBuk();
            after5Run(FlowBukArr);
            this.renderCards(after5Arr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active')
        ) {
            FlowCarts();
            after5Run(FlowCartsArr);
            this.renderCards(after5Arr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            after5.classList.contains('active')
        ) {
            BukCart();
            after5Run(BukCartArr);
            this.renderCards(after5Arr);
        }
        ////1 k v do
        else if (fbut.classList.contains('active') && do5.classList.contains('active')) {
            do5Run(onlyFlowers);
            this.renderCards(do5Arr);
        } else if (kbut.classList.contains('active') && do5.classList.contains('active')) {
            do5Run(onlyBuket);
            this.renderCards(do5Arr);
        } else if (cbut.classList.contains('active') && do5.classList.contains('active')) {
            do5Run(onlyCarts);
            this.renderCards(do5Arr);
        }
        ////1 k v after
        else if (fbut.classList.contains('active') && after5.classList.contains('active')) {
            after5Run(onlyFlowers);
            this.renderCards(after5Arr);
        } else if (kbut.classList.contains('active') && after5.classList.contains('active')) {
            after5Run(onlyBuket);
            this.renderCards(after5Arr);
        } else if (cbut.classList.contains('active') && after5.classList.contains('active')) {
            after5Run(onlyCarts);
            this.renderCards(after5Arr);
        }

        ///// vse i vse cvet
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            this.renderCards(flowers);
        }
        //////////2 k i 2 cveta
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowBuk();
            redWhite(FlowBukArr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            redYellow(FlowBukArr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            whiteYellow(FlowBukArr);
            this.renderCards(whiteYellowArr);
        } /* else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowBuk();
            redWhite(FlowBukArr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            redYellow(FlowBukArr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            whiteYellow(FlowBukArr);
            this.renderCards(whiteYellowArr);
        } */

        //
        else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowCarts();
            redWhite(FlowCartsArr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            redYellow(FlowCartsArr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            whiteYellow(FlowCartsArr);
            this.renderCards(whiteYellowArr);
        } /* else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowCarts();
            redWhite(FlowCartsArr);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            redYellow(FlowCartsArr);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            whiteYellow(FlowCartsArr);
            this.renderCards(whiteYellowArr);
        } */

        //
        else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            BukCart();
            redWhite(BukCartArr);
            this.renderCards(redWhiteArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            redYellow(BukCartArr);
            this.renderCards(redYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            whiteYellow(BukCartArr);
            this.renderCards(whiteYellowArr);
        } /* else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            BukCart();
            redWhite(BukCartArr);
            this.renderCards(redWhiteArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            redYellow(BukCartArr);
            this.renderCards(redYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            whiteYellow(BukCartArr);
            this.renderCards(whiteYellowArr);
        } */

        ///vse i cvet
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            redRun(flowers);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            yellowRun(flowers);
            this.renderCards(yellowArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            whiteRun(flowers);
            this.renderCards(whiteArr);
        }

        ////2 i cvet
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            FlowBuk();
            redRun(FlowBukArr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            FlowCarts();
            redRun(FlowCartsArr);
            this.renderCards(redArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            red.classList.contains('active')
        ) {
            BukCart();
            redRun(BukCartArr);
            this.renderCards(redArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowBuk();
            whiteRun(FlowBukArr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            FlowCarts();
            whiteRun(FlowCartsArr);
            this.renderCards(whiteArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            BukCart();
            whiteRun(BukCartArr);
            this.renderCards(whiteArr);
        } else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowBuk();
            yellowRun(FlowBukArr);
            this.renderCards(yellowArr);
        } else if (
            fbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            FlowCarts();
            yellowRun(FlowCartsArr);
            this.renderCards(yellowArr);
        } else if (
            kbut.classList.contains('active') &&
            cbut.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            BukCart();
            yellowRun(BukCartArr);
            this.renderCards(yellowArr);
        }

        //////1 k i 2 cveta
        else if (
            fbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            this.renderCards(onlyFlowers);
        } else if (
            kbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            this.renderCards(onlyBuket);
        } else if (
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            this.renderCards(onlyCarts);
        } else if (
            fbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            redWhite(onlyFlowers);
            this.renderCards(redWhiteArr);
        } else if (
            fbut.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            redYellow(onlyFlowers);
            this.renderCards(redYellowArr);
        } else if (
            fbut.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            whiteYellow(onlyFlowers);
            this.renderCards(whiteYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            redWhite(onlyBuket);
            this.renderCards(redWhiteArr);
        } else if (
            kbut.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            redYellow(onlyBuket);
            this.renderCards(redYellowArr);
        } else if (
            kbut.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            whiteYellow(onlyBuket);
            this.renderCards(whiteYellowArr);
        } else if (
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            white.classList.contains('active')
        ) {
            redWhite(onlyCarts);
            this.renderCards(redWhiteArr);
        } else if (
            cbut.classList.contains('active') &&
            red.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            redYellow(onlyCarts);
            this.renderCards(redYellowArr);
        } else if (
            cbut.classList.contains('active') &&
            white.classList.contains('active') &&
            yellow.classList.contains('active')
        ) {
            whiteYellow(onlyCarts);
            this.renderCards(whiteYellowArr);
        }

        ////1 i cvet
        else if (fbut.classList.contains('active') && red.classList.contains('active')) {
            redRun(onlyFlowers);
            this.renderCards(redArr);
        } else if (fbut.classList.contains('active') && white.classList.contains('active')) {
            whiteRun(onlyFlowers);
            this.renderCards(whiteArr);
        } else if (fbut.classList.contains('active') && yellow.classList.contains('active')) {
            yellowRun(onlyFlowers);
            this.renderCards(yellowArr);
        } else if (kbut.classList.contains('active') && red.classList.contains('active')) {
            redRun(onlyBuket);
            this.renderCards(redArr);
        } else if (kbut.classList.contains('active') && white.classList.contains('active')) {
            whiteRun(onlyBuket);
            this.renderCards(whiteArr);
        } else if (kbut.classList.contains('active') && yellow.classList.contains('active')) {
            yellowRun(onlyBuket);
            this.renderCards(yellowArr);
        } else if (cbut.classList.contains('active') && red.classList.contains('active')) {
            redRun(onlyCarts);
            this.renderCards(redArr);
        } else if (cbut.classList.contains('active') && white.classList.contains('active')) {
            whiteRun(onlyCarts);
            this.renderCards(whiteArr);
        } else if (cbut.classList.contains('active') && yellow.classList.contains('active')) {
            yellowRun(onlyCarts);
            this.renderCards(yellowArr);
        }
        ///////////////
        else if (
            fbut.classList.contains('active') &&
            kbut.classList.contains('active') &&
            cbut.classList.contains('active')
        ) {
            this.renderCards(flowers);
        } else if (fbut.classList.contains('active') && kbut.classList.contains('active')) {
            FlowBuk();
            this.renderCards(FlowBukArr);
        } else if (fbut.classList.contains('active') && cbut.classList.contains('active')) {
            FlowCarts();
            this.renderCards(FlowCartsArr);
        } else if (kbut.classList.contains('active') && cbut.classList.contains('active')) {
            BukCart();
            this.renderCards(BukCartArr);
        } else if (fbut.classList.contains('active')) {
            this.renderCards(onlyFlowers);
        } else if (kbut.classList.contains('active')) {
            this.renderCards(onlyBuket);
        } else if (cbut.classList.contains('active')) {
            this.renderCards(onlyCarts);
        }
    }
}

export default Render;
