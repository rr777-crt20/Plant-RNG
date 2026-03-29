const log = console.log
const body = document.body
const sun = document.getElementById('info-sun');
const exp = document.getElementById('info-exp');
const lom = document.getElementById('info-dostup-click');
const main = document.getElementById('main-button');
const chancee = document.getElementById('result-text');
const image = document.getElementById('img');
const efi = document.getElementById('efi')
const button_efir = document.getElementById('ToNot')
const button_sun = document.getElementById('ToSun')

const buttonOpenshop = document.getElementById('openshop')
const shop = document.getElementById('shop-container')
const closeShop = document.getElementById('closeShop')

let isShopOpen = false
let TrueToClick = true

let suns = 0;
let veve = 0;
let efir = 0;
let addefir = 1;

sun.textContent = suns;
lom.textContent = veve;

main.onclick = ToClick;
button_efir.onclick = ToEfir;
button_sun.onclick = ToSun

buttonOpenshop.onclick = function() {
    isShopOpen = !isShopOpen
    if (isShopOpen) shop.style.transform = 'scale(1)'
    else shop.style.transform = 'scale(0)'
}

closeShop.onclick = function() {
    shop.style.transform = 'scale(0)'
    isShopOpen = false
}

window.obmen = function(sunprice, addtoefir) {
    if (suns >= sunprice) {
        addefir += addtoefir;
        suns -= sunprice;
        sun.textContent = suns;
        efi.textContent = "ЭФИР:" + efir;
    }
}

function chance(probability) {
    return Math.random() < probability;
}

function ToClick() {
    if (TrueToClick == true) {
         if (chance(1/500)) {
            chancee.classList.add('pink');
            chancee.classList.remove('green', 'gray', 'blue', 'green2', 'red', 'blue2', 'lightgreen', 'black', 'purple', 'lime');
            chancee.textContent = "БОЖЕСТРЕЛ (1/500)";
            veve += 300;
            lom.textContent = veve;
            image.src = "./images/13.jpg";
     
            ANIMATION100(); 
        }
         if (chance(1/200)) {
            chancee.classList.add('purple');
            chancee.classList.remove('green', 'gray', 'blue', 'green2',  'blue2', 'lightgreen', 'black', 'lime', 'pink');
            chancee.textContent = "АНГЕЛ (1/200)";
            veve += 145;
            lom.textContent = veve;
            image.src = "./images/a12.jpg";
      
            ANIMATION100(); 
        }
        if (chance(1/100)) {
            chancee.classList.add('lime');
            chancee.classList.remove('green', 'gray', 'blue', 'green2', 'red', 'blue2', 'lightgreen', 'black', 'purple', 'pink');
            chancee.textContent = "грохомёт (1/100)";
            veve += 95;
            lom.textContent = veve;
            image.src = "./images/a11.webp";
          
            ANIMATION100(); 
        }
        else if (chance(1/50)) {
            chancee.classList.add('purple');
            chancee.classList.remove('green', 'gray', 'blue', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'black', 'pink');
            chancee.textContent = "теневой горохострел (1/50)";
            veve += 70;
            lom.textContent = veve;
            image.src = "./images/a10.png";
        }
        else if (chance(1/40)) {
            chancee.classList.add('pink');
            chancee.classList.remove('green', 'gray', 'blue', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'black');
            chancee.textContent = "запутаный горохострел (1/40)";
            veve += 55;
            lom.textContent = veve;
            image.src = "./images/a9.jfif";
        }
        else if (chance(1/25)) {
            chancee.classList.add('black');
            chancee.classList.remove('green', 'gray', 'blue', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "пустотный горохострел (1/25)";
            veve += 40;
            lom.textContent = veve;
            image.src = "./images/a8.webp";
        }
        else if (chance(1/20)) {
            chancee.classList.add('green2');
            chancee.classList.remove('green', 'gray', 'blue', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink', 'black');
            chancee.textContent = "двойной 2.0 горохострел (1/20)";
            veve += 25;
            lom.textContent = veve;
            image.src = "./images/a7.webp";
        }
        else if (chance(1/17)) {
            chancee.classList.add('blue2');
            chancee.classList.remove('green', 'gray', 'black', 'green2', 'red', 'blue', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "ледяной 2.0 горохострел (1/17)";
            veve += 18;
            lom.textContent = veve;
            image.src = "./images/a6.webp";
        }
        else if (chance(1/14)) {
            chancee.classList.add('lightgreen');
            chancee.classList.remove('green', 'gray', 'black', 'green2', 'red', 'blue2', 'blue', 'lime', 'purple', 'pink');
            chancee.textContent = "трихострел (1/14)";
            veve += 13;
            lom.textContent = veve;
            image.src = "./images/a5.jfif";
        }
        else if (chance(1/11)) {
            chancee.classList.add('red');
            chancee.classList.remove('green', 'gray', 'black', 'green2', 'blue', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "огненный горохострел (1/11)";
            veve += 8;
            lom.textContent = veve;
            image.src = "./images/a4.png";
        }
        else if (chance(1/8)) {
            chancee.classList.add('blue');
            chancee.classList.remove('green', 'gray', 'black', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "ледяной горохострел (1/8)";
            veve += 5;
            lom.textContent = veve;
            image.src = "./images/a3.jfif";
        }
        else if (chance(1/5)) {
            chancee.classList.add('green');
            chancee.classList.remove('blue', 'gray', 'black', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "двойной горохострел (1/5)";
            veve += 3;
            lom.textContent = veve;
            image.src = "./images/a2.jfif";
        }
        else {
            chancee.classList.add('gray');
            chancee.classList.remove('green', 'blue', 'black', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "горохострел (1/3)";
            veve += 1;
            lom.textContent = veve;
            image.src = "./images/a1.png";
        }
    }
}
/*if (chancee.textContent == "горохострел (1/3)"){
    chancee.classList.add('gray');
            chancee.classList.remove('green', 'blue', 'black', 'green2', 'red', 'blue2', 'lightgreen', 'lime', 'purple', 'pink');
            chancee.textContent = "горохострел (1/0)";
            veve += 1;
            lom.textContent = veve;
            image.src = "./images/a1.png";
            
}*/

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

function ANIMATION100() {
        main.classList.add('UsePink');
        TrueToClick = false;

        setTimeout(() => {
            main.classList.remove('UsePink');
            TrueToClick = true;
       
        }, 3500);
}
