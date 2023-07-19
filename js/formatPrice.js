export default () => {
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })

    return formater
}
