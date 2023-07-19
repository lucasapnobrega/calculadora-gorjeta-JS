export default (ev) => {
    const copyTipBtn = document.querySelector('.copyTipBtn')
    const copyTotalAmountBtn = document.querySelector('.copyTotalAmountBtn')

    const tipAmount = document.querySelector('#tipAmount').value
    const totalAmount = document.querySelector('#totalAmount').value

    if(ev.target.classList.contains('copyTipBtn')) {
        navigator.clipboard.writeText(tipAmount)

        copyTipBtn.classList.add('copied')
        copyTipBtn.textContent = 'Copiado!'

        setTimeout(() => {
            copyTipBtn.classList.remove('copied')
            copyTipBtn.textContent = 'Copiar'
        }, 1250)

    } else if(ev.target.classList.contains('copyTotalAmountBtn')) {
        navigator.clipboard.writeText(totalAmount)

        copyTotalAmountBtn.classList.add('copied')
        copyTotalAmountBtn.textContent = 'Copiado!'

        setTimeout(() => {
            copyTotalAmountBtn.classList.remove('copied')
            copyTotalAmountBtn.textContent = 'Copiar'
        }, 1250)
    }
}