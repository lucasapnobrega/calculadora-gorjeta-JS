import validations from "./validations.js"
import formatPrice from "./formatPrice.js"
import showButtons from "./showButtons.js"
import copy from "./copy.js"
import clean from "./clean.js"
import switchTheme from "./switchTheme.js"

const form = document.querySelector('form')

const tipAmountInputDisabled = document.querySelector('#tipAmount')
const totalAmountInputDisabled = document.querySelector('#totalAmount')

function execute(ev) {
    ev.preventDefault()

    const billAmount = parseFloat(document.querySelector('#billAmount').value)
    const serviceQuality = parseFloat(document.querySelector('#serviceQuality').value)

    if(validations(billAmount) === false) {
        return
    }

    const tipAmount = billAmount * serviceQuality
    const totalBillAmount = billAmount + tipAmount

    const formater = formatPrice()
    
    tipAmountInputDisabled.value = formater.format(tipAmount)
    totalAmountInputDisabled.value = formater.format(totalBillAmount)

    showButtons()
}

form.addEventListener('submit', execute)

document.querySelector('.copyTipBtn').addEventListener('click', copy)
document.querySelector('.copyTotalAmountBtn').addEventListener('click', copy)

document.querySelector('.cleanAllBtn').addEventListener('click', clean)

document.querySelector('#switch-theme').addEventListener('click', switchTheme)