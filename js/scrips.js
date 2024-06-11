// Seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#multiplicator")
const multiplicationInput = document.querySelector("#number")
const multiplicationTable = document.querySelector("#multiplication-operations")
const multiplicationTitle = document.querySelector("#multiplication-title span")

// Funções

const createTable=(number, multiplicatorNumber)=>{
    multiplicationTable.innerHTML = ""
    for(i = 1; i <= multiplicatorNumber; i ++){
        const result = number * i

    const template = `<div class="row">
    <div class="operation">${number} x ${i} = </div>
    <div class="result">${result}</div>
    </div>`

    const parse = new DOMParser
    const htmlTemplate = parse.parseFromString(template, "text/html")
    const row = htmlTemplate.querySelector(".row")
    multiplicationTable.appendChild(row)
    }
    multiplicationTitle.innerHTML = number
}

// Eventos

multiplicationForm.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    const multiplicatorNumber = +numberInput.value
    const multiplicationNumber = +multiplicationInput.value

    if(!multiplicationNumber || !multiplicatorNumber) return
    createTable(multiplicationNumber, multiplicatorNumber)
})