export default () => {
    const copyTipBtn = document.querySelector('.copyTipBtn')
    const copyTotalAmountBtn = document.querySelector('.copyTotalAmountBtn')
    const inputsDisabled = document.querySelectorAll('.input-button-group input')
    const cleanBtn = document.querySelector('.cleanAllBtn')
    
    copyTipBtn.classList.remove('displayNone')
    copyTotalAmountBtn.classList.remove('displayNone')
    inputsDisabled.forEach(el => el.classList.add('borderRightZero'))
    cleanBtn.classList.remove('displayNone')
}