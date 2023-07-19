export default () => {
    const inputs = document.querySelectorAll('input')
    const select = document.querySelector('select')
    const options = document.querySelectorAll('option')
    const billAmountElement = document.querySelector('#billAmount')

    const copyTipBtn = document.querySelector('.copyTipBtn')
    const copyTotalAmountBtn = document.querySelector('.copyTotalAmountBtn')
    const cleanBtn = document.querySelector('.cleanAllBtn')
    const inputsDisabled = document.querySelectorAll('.input-button-group input')

    inputs.forEach(input => {
        input.value = ''
    })

    billAmountElement.classList.remove('border-green')
    billAmountElement.classList.remove('border-red')

    copyTipBtn.classList.add('displayNone')
    copyTotalAmountBtn.classList.add('displayNone')
    cleanBtn.classList.add('displayNone')

    select.value = options[0].value

    inputsDisabled.forEach(disabled => disabled.classList.remove('borderRightZero'))
}