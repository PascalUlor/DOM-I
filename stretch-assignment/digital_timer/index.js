const digits = document.querySelector(".digits");
let ms = document.querySelector('#msTens');
let msH = document.querySelector('#msHundreds');
let secOnes = document.querySelector('#secondOnes');
let secT = document.querySelector('#secondTens');
let count = 0;
let mili = 0;
 let miH = 0;
 let secs = 0;
 let sT = 0;
const timer = () => {

 if (count === 100) {
     miH++;
     count = 0; 
 }
 if(miH === 10) {
     miH = 0;
     secs++;
 }
 if( secs === 10) {
     secs = 0;
     sT++;
 }
 if (sT === 1) {
     clearInterval(clock);
    Array.from(digits.children).forEach(digit => {
        digit.classList.add("redDigit");
      })
 }
    ms.textContent = mili;
    msH.textContent = miH;
    secOnes.textContent = secs;
    secT.textContent = sT;
    count += 10;
}

let clock = setInterval(timer, 10);
