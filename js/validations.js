export default (billAmount) => {
    const billAmountElement = document.querySelector('#billAmount')
    
    if(!billAmount) {
        alert('Please fill in the bill value field.')
        billAmountElement.classList.add('border-red')
        billAmountElement.classList.remove('border-green')
        return false
    } else if(billAmount < 0) {
        alert('The bill cannot be less than zero.')
        billAmountElement.classList.add('border-red')
        billAmountElement.classList.remove('border-green')
        return false
    } else {
        billAmountElement.classList.remove('border-red')
        billAmountElement.classList.add('border-green')
    }
}