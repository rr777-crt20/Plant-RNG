const sun = document.getElementById('info-sun');
const exp = document.getElementById('info-exp');
const lom = document.getElementById('info-dostup-click');
const main = document.getElementById('main-button');
const div = document.getElementById('result');
const chancee = document.getElementById('result-text');
const image = document.getElementById('img');
const efi = document.getElementById('efi')
const button_efir = document.getElementById('ToNot')
const button_sun = document.getElementById('ToSun')

const buttonOpenshop = document.getElementById('openshop')
buttonOpenshop.onclick = openShop
const shop = document.getElementById('shop-container')
const B = document.getElementById('obm')
let isShopOpen = false
let To100 = false
let TrueToClick = true

// Объявляем все переменные
let suns = 0;
let loms = 0;
let veve = 0;
let mests = 5;
let point = 0;
let Mogno = false;
let efir = 0;
let addefir = 1;

// Инициализация
sun.textContent = suns;
lom.textContent = veve;

main.onclick = ToClick;
button_efir.onclick = ToEfir;
button_sun.onclick = ToSun
B.onclick = () => obmen(1, 1);

function chance(probability) {
    return Math.random() < probability;
}

function startTimer(time, functions) {
    console.log('startTimer')
    const fList = functions
    setTimeout(() => {
        fList.forEach(f => f())
        console.log('startTimer done')
    }, time * 1000)
}

function ToClick() {
    if (TrueToClick == true) {
        // Важно! Проверяем от меньшей вероятности к большей
        // Или от большей к меньшей, но 1/1 должно быть последним!
        
        if (chance(1/100)) {  // 1% шанс
            chancee.classList.add('lime');
            chancee.classList.remove('green', 'gray', 'blue', 'green2', 'red', 'blue2', 'lightgreen', 'black', 'purple', 'pink');
            chancee.textContent = "грохомёт (1/100)";
            veve += 95;
            lom.textContent = veve;
            image.src = "./images/a11.webp";
            To100 = true;
            ANIMATION100(); 
        }
        else if (chance(1/50)) {  // 2% шанс
            chancee.classList.add('purple');
            chancee.classList.remove('green', 'gray', 'blue', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'black', 'pink');
            chancee.textContent = "теневой горохострел (1/50)";
            veve += 70;
            lom.textContent = veve;
            image.src = "./images/a10.png";
        }
        else if (chance(1/40)) {  // 2.5% шанс
            chancee.classList.add('pink');
            chancee.classList.remove('green', 'gray', 'blue', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'black');
            chancee.textContent = "запутаный горохострел (1/40)";
            veve += 55;
            lom.textContent = veve;
            image.src = "./images/a9.jfif";
        }
        else if (chance(1/25)) {  // 4% шанс
            chancee.classList.add('black');
            chancee.classList.remove('green', 'gray', 'blue', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "пустотный горохострел (1/25)";
            veve += 40;
            lom.textContent = veve;
            image.src = "./images/a8.webp";
        }
        else if (chance(1/20)) {  // 5% шанс
            chancee.classList.add('green2');
            chancee.classList.remove('green', 'gray', 'blue', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink', 'black');
            chancee.textContent = "двойной 2.0 горохострел (1/20)";
            veve += 25;
            lom.textContent = veve;
            image.src = "./images/a7.webp";
        }
        else if (chance(1/17)) {  // ~5.9% шанс
            chancee.classList.add('blue2');
            chancee.classList.remove('green', 'gray', 'black', 'green2', 'red', 'blue', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "ледяной 2.0 горохострел (1/17)";
            veve += 18;
            lom.textContent = veve;
            image.src = "./images/a6.webp";
        }
        else if (chance(1/14)) {  // ~7.1% шанс
            chancee.classList.add('lightgreen');
            chancee.classList.remove('green', 'gray', 'black', 'green2', 'red', 'blue2', 'blue', 'lime', 'purple', 'pink');
            chancee.textContent = "трихострел (1/14)";
            veve += 13;
            lom.textContent = veve;
            image.src = "./images/a5.jfif";
        }
        else if (chance(1/11)) {  // ~9.1% шанс
            chancee.classList.add('red');
            chancee.classList.remove('green', 'gray', 'black', 'green2', 'blue', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "огненный горохострел (1/11)";
            veve += 8;
            lom.textContent = veve;
            image.src = "./images/a4.png";
        }
        else if (chance(1/8)) {  // 12.5% шанс
            chancee.classList.add('blue');
            chancee.classList.remove('green', 'gray', 'black', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "ледяной горохострел (1/8)";
            veve += 5;
            lom.textContent = veve;
            image.src = "./images/a3.jfif";
        }
        else if (chance(1/5)) {  // 20% шанс
            chancee.classList.add('green');
            chancee.classList.remove('blue', 'gray', 'black', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "двойной горохострел (1/5)";
            veve += 3;
            lom.textContent = veve;
            image.src = "./images/a2.jfif";
        }
        else {  // ~33.3% шанс (оставшаяся вероятность)
            chancee.classList.add('gray');
            chancee.classList.remove('green', 'blue', 'black', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "горохострел (1/3)";
            veve += 1;
            lom.textContent = veve;
            image.src = "./images/a1.png";
        }
    }
}

function ToEfir() {
    if (veve >= 1) {
        veve -= 1;
        efir += addefir;
        lom.textContent = veve;
        efi.textContent = "ЭФИР:" + efir;
    }
}

function ToSun() {
    if (efir >= 5) {
        efir -= 5;
        suns += 1;
        sun.textContent = suns;
        efi.textContent = "ЭФИР:" + efir;
    }
}

function obmen(sunprice, addtoefir) {
    if (suns >= sunprice) {
        addefir += addtoefir;
        suns -= sunprice;
        sun.textContent = suns;
        efi.textContent = "ЭФИР:" + efir;
    }
}

function openShop() {
    isShopOpen = !isShopOpen
    console.log(isShopOpen)

    if (isShopOpen) shop.style.transform = 'scale(1)'
    else shop.style.transform = 'scale(0)'
}

function ANIMATION100() {
    if (To100 == true) {
        sun.classList.add('pink');
        TrueToClick = false;
        setTimeout(() => {
            sun.classList.remove('pink');
            TrueToClick = true;
            To100 = false;
        }, 3500);
    }
}

