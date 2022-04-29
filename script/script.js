let btnElement = document.querySelector(".calculation__result");
let resultElement = document.querySelector(".result");
let clearBtn = document.querySelector(".calculation__clear-btn");

let tNumber = document.querySelector('[name="bank-tinkoff"]');
let aNumber = document.querySelector('[name="bank-alfa"]');
let rNumber = document.querySelector('[name="bank-rosbank"]');

let fNumber = document.querySelector('[name="flat"]');
let iNumber = document.querySelector('[name="internet"]');
let pNumber = document.querySelector('[name="mobile"]');
let petrolNumber = document.querySelector('[name="petrol"]');

let btnWageResult = document.querySelector(".wage__result");
let btnWageClear = document.querySelector(".wage__clear-btn");
let resultAvans = document.querySelector(".result-avans");
let resultZarp = document.querySelector(".result-zarp");
let mounthZarp = document.querySelector('[name="zarp"]');

btnElement.addEventListener("click", () => {
    if (tNumber.value === "" || aNumber.value === "" || rNumber.value === "" || fNumber === "" || iNumber === "" || pNumber === "" || petrolNumber === "") {
        resultElement.textContent = "Заполните все поля";
    } else {
        let res =
            parseFloat(tNumber.value) +
            parseFloat(aNumber.value) +
            parseFloat(rNumber.value) +
            parseFloat(fNumber.value) +
            parseFloat(iNumber.value) +
            parseFloat(pNumber.value) +
            parseFloat(petrolNumber.value);
        resultElement.textContent = res;
    }
});

clearBtn.addEventListener("click", () => {
    resultElement.textContent = "";
    resultAvans.textContent = "";
	resultZarp.textContent = "";

    tNumber.value = undefined;
    aNumber.value = undefined;
    rNumber.value = undefined;
    fNumber.value = undefined;
    iNumber.value = undefined;
    pNumber.value = undefined;
    petrolNumber.value = undefined;
	mounthZarp.value = undefined;
   
    
});

btnWageResult.addEventListener("click", () => {
    if (tNumber.value === "" || aNumber.value === "" || rNumber.value === "" || fNumber === "" || iNumber === "" || pNumber === "" || petrolNumber === "" || mounthZarp === "") {
        resultElement.textContent = "Заполните все поля";
    } else {
        let credits = parseFloat(tNumber.value) + parseFloat(aNumber.value) + parseFloat(rNumber.value);
        let payments = parseFloat(fNumber.value) + parseFloat(iNumber.value) + parseFloat(pNumber.value) + parseFloat(petrolNumber.value);
        let onHands = (mounthZarp.value / 2 - credits + (mounthZarp.value / 2 - payments)) / 2;
        resultAvans.textContent = onHands;
        resultZarp.textContent = onHands;
    }
});
