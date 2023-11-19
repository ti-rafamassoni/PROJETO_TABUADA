const number = document.querySelector("#tabuada");
const multiplier = document.querySelector("#multiplicador");
const multiplicationForm = document.querySelector("#form");
const multiplicationTable = document.querySelector("#multiplication-operations");

const calculate = (number, multiplier) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplier; i++) {
        let numberResult = number * i;
        const template = `<div class="row">
            <div class="operations">${number} x ${i} = </div>
            <div class="result">${numberResult}</div>
            </div>`
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);

        const span = document.querySelector("span");
        span.innerHTML = number;
     
    }
 
}

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numberTabuada = +number.value
    const numberMultiplier = +multiplier.value


    if(!numberTabuada || !numberMultiplier) {
        return
    }

    calculate(numberTabuada, numberMultiplier);
 
})