
const starters = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"KAVA" },' +
		'{ "type":"drink", "name":"BIJELA KAVA", "description":"(Šalica)", "price":"2.00€" },' +
		'{ "type":"drink", "name":"BEZKOFEINSKA KAVA", "description":"(Šalica)", "price":"1.80€" },' +
		'{ "type":"drink", "name":"CAPPUCINO", "description":"(Šalica)", "price":"1.70€" },' +
		'{ "type":"drink", "name":"KAVA S ŠLAGOM", "description":"(Šalica)", "price":"1.80€" },' +
		'{ "type":"drink", "name":"NESCAFE", "description":"(Šalica)", "price":"2.20€" },' +
		'{ "type":"drink", "name":"KAVA", "description":"(Šalica)", "price":"1.30€" },' +
		'{ "type":"drink", "name":"KAVA S MLIJEKOM", "description":"(mala Šalica)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"KAVA S MLIJEKOM", "description":"(Šalica)", "price":"1.70€" },' +
		'{ "type":"separator", "description":"OSTALO" },' +
		'{ "type":"drink", "name":"KAKAO", "description":"(Šalica)", "price":"2.00€" },' +
		'{ "type":"drink", "name":"ČAJ", "description":"(Šalica)", "price":"2.00€" },' +
		'{ "type":"drink", "name":"VRUČA ČOKOLADA", "description":"(Šalica)", "price":"2.50€" },' +
		'{ "type":"separator", "description":"DODACI" },' +
		'{ "type":"drink", "name":"MED", "description":"(Komad)", "price":"0.50€" },' +
		'{ "type":"drink", "name":"ŠLAG", "description":"(Porcija)", "price":"0.50€" },' +
		'{ "type":"drink", "name":"MLIJEKO", "description":"(0,1l)", "price":"0.70€" }]' 
);
const mains = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"STRANA ALK. PIĆA" },' +
		'{ "type":"drink", "name":"BACARDI", "description":"(0.03l)", "price":"2.00€" },' +
		'{ "type":"drink", "name":"GENTELMAN JACK", "description":"(0.03l)", "price":"3.50€" },' +
		'{ "type":"drink", "name":"JACK DANIELS", "description":"(0.03l)", "price":"2.50€" },' +
		'{ "type":"drink", "name":"JAMESON", "description":"(0.03l)", "price":"2.50€" },' +
		'{ "type":"drink", "name":"SOUTHERN COMFORT", "description":"(0.03l)", "price":"2.70€" },' +
		'{ "type":"drink", "name":"TERANINO", "description":"(0.03l)", "price":"3.00€" },' +
		'{ "type":"drink", "name":"JEGERMAISTER", "description":"(0.03l)", "price":"2.00€" },' +
		'{ "type":"drink", "name":"STOCK 64", "description":"(0.03l)", "price":"1.80€" },' +
		'{ "type":"separator", "description":"DOMAĆA ALK. PIĆA" },' +
		'{ "type":"drink", "name":"AMARO", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"GIN", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"BRANDY", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"BOROVNIČKA", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"KRUŠKOVAC", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"LOZOVAČA", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"MEDICA", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"ORAHOVAC", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"TRAVARICA", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"PELINKOVAC", "description":"(0.03l)", "price":"1.50€" },' +
		'{ "type":"separator", "description":"VINO" },' +
		'{ "type":"drink", "name":"Vino Bijelo", "description":"(0.1l)", "price":"1.00€" },' +
		'{ "type":"drink", "name":"Vino Crno", "description":"(0.1l)", "price":"1.00€" },' +
		'{ "type":"drink", "name":"Bambus", "description":"(0.2l)", "price":"2.50€" },' +
		'{ "type":"drink", "name":"Gemišt", "description":"(0.2l)", "price":"1.70€" },' +
		'{ "type":"drink", "name":"Škropec", "description":"(0.1l)", "price":"1.20€" } ]'
);
const desserts = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"PIVO" },' +
		'{ "type":"drink", "name":"CORONA EXTRA", "description":"(0.35l)", "price":"3.20€" },' +
		'{ "type":"drink", "name":"HEINEKEN", "description":"(0.33l)", "price":"2.60€" },' +
		'{ "type":"drink", "name":"OŽUJSKO", "description":"(0,5l)", "price":"2.50€" },' +
		'{ "type":"drink", "name":"OŽUJSKO", "description":"(0.33l)", "price":"2.20€" },' +
		'{ "type":"drink", "name":"BUDWEISER SVJETLI", "description":"(0.5l)", "price":"2.70€" },' +
		'{ "type":"drink", "name":"BUDWEISER TAMNI", "description":"(0.5l)", "price":"2.70€" },' +
		'{ "type":"drink", "name":"BECK’S", "description":"(0.33l)", "price":"2.30€" },' +
		'{ "type":"drink", "name":"CARLSBERG", "description":"(0.40l)", "price":"2.30€" },' +
		'{ "type":"drink", "name":"KARLOVAČKO", "description":"(0.5l)", "price":"2.50€" },' +
		'{ "type":"drink", "name":"PAN", "description":"(0.5l)", "price":"2.50€" },' +
		'{ "type":"drink", "name":"RADLER", "description":"(0.5l)", "price":"2.50€" },' +
		'{ "type":"drink", "name":"SOMERSBY", "description":"(0.33l)", "price":"2.80€" },' +
		'{ "type":"drink", "name":"STAROPRAMEN", "description":"(0.5l)", "price":"2.50€" },' +
		'{ "type":"drink", "name":"STELLA", "description":"(0.33l)", "price":"2.40€" }]'
);
const drinks = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"BEZALKOHOLNA PIĆA" },' +
		'{ "type":"drink", "name":"CEDEVITA", "description":"(0.3l)", "price":"1.50€" },' +
		'{ "type":"drink", "name":"CIJEDENI SOK", "description":"(0.3l)", "price":"3.00€" },' +
		'{ "type":"drink", "name":"COCA COLA", "description":"(0.25l)", "price":"2.30€" },' +
		'{ "type":"drink", "name":"COCKTA", "description":"(0.275l)", "price":"2.30€" },' +
		'{ "type":"drink", "name":"ENERGY", "description":"(0.25l)", "price":"3.00€" },' +
		'{ "type":"drink", "name":"FANTA", "description":"(0.25l)", "price":"2.30€" },' +
		'{ "type":"drink", "name":"HIDRA", "description":"(0.5l)", "price":"2.70€" },' +
		'{ "type":"drink", "name":"LEDENI ČAJ", "description":"(0.33l)", "price":"2.30€" },' +
		'{ "type":"drink", "name":"MINERALNA VODA", "description":"(1l)", "price":"5.00€" },' +
		'{ "type":"drink", "name":"MINERALNA VODA", "description":"(0.25l)", "price":"2.20€" },' +
		'{ "type":"drink", "name":"VODA S OKUSOM", "description":"(0.33l)", "price":"2.30€" },' +
		'{ "type":"drink", "name":"ORANGINA", "description":"(0.25l)", "price":"2.30€" },' +
		'{ "type":"drink", "name":"PRIRODNI SOK", "description":"(0.195l)", "price":"2.50€" },' +
		'{ "type":"drink", "name":"SCHWEPPES", "description":"(0.25l)", "price":"2.30€" },' +
		'{ "type":"drink", "name":"SPRITE", "description":"(0.25l)", "price":"2.30€" }]'
);

/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");

let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");
let ni4 = document.getElementById("ni4");

startersbutton.addEventListener("click", (e) => {
	setIndicator(0);
	populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
	setIndicator(1);
	populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
	setIndicator(2);
	populateItems(desserts);
});
drinksbutton.addEventListener("click", (e) => {
	setIndicator(3);
	populateItems(drinks);
});

function populateItems(items) {
	let menu = document.querySelector(".menu");
	menu.innerHTML = "";
	for (i = 0; i < items.length; i++) {
		if (items[i].type === "separator") {
			let menuitem = document.createElement("div");
			menuitem.setAttribute("class", "menu-separator");
			menuitem.innerHTML = items[i].description;
			menu.appendChild(menuitem);
		}
		if (items[i].type === "food") {
			let menuitem = document.createElement("div");
			let menuitemname = document.createElement("div");
			let menuitemdesc = document.createElement("div");
			let menuitemprize = document.createElement("div");
			menuitem.setAttribute("class", "menu-item");
			menuitemname.setAttribute("class", "menu-item-name");
			menuitemdesc.setAttribute("class", "menu-item-description");
			menuitemprize.setAttribute("class", "menu-item-price");

			menuitemname.innerHTML = items[i].name;
			menuitemdesc.innerHTML = items[i].description;
			menuitemprize.innerHTML = items[i].price;

			menuitem.appendChild(menuitemname);
			menuitem.appendChild(menuitemdesc);
			menuitem.appendChild(menuitemprize);
			menu.appendChild(menuitem);
		}
		if (items[i].type === "drink") {
			let drinkitem = document.createElement("div");
			let drinkitemname = document.createElement("div");
			let drinkitemdesc = document.createElement("div");
			let drinkitemprize = document.createElement("div");
			drinkitem.setAttribute("class", "drink-item");
			drinkitemname.setAttribute("class", "drink-item-name");
			drinkitemdesc.setAttribute("class", "drink-item-description");
			drinkitemprize.setAttribute("class", "drink-item-price");

			drinkitemname.innerHTML = items[i].name;
			drinkitemdesc.innerHTML = items[i].description;
			drinkitemprize.innerHTML = items[i].price;

			drinkitem.appendChild(drinkitemname);
			drinkitem.appendChild(drinkitemdesc);
			drinkitem.appendChild(drinkitemprize);
			menu.appendChild(drinkitem);
		}
	}
}
function setIndicator(sel) {
	sl = sel;
	let vp = "";
	if (window.innerWidth < 800) {
		vp = "60px";
	} else {
		vp = "85%";
	}
	let elems = [ni1, ni2, ni3, ni4];
	for (i = 0; i < elems.length; i++) {
		if (i === sel) {
			elems[i].style.width = vp;
			elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
		} else {
			elems[i].style.width = "0";
			elems[i].style.boxShadow = "none";
		}
	}
}

window.addEventListener("resize", (e) => {
	setIndicator(sl);
});

//default runs
setIndicator(sl);
populateItems(starters);
