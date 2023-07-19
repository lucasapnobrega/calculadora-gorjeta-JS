export default () => {
    const container = document.querySelector('.container')
    const root = document.querySelector(':root')

    if(container.dataset.theme === 'dark') {
        root.style.setProperty('--bg-1', '#f2f2f2')
        root.style.setProperty('--bg-2', '#fff')
        root.style.setProperty('--color', '#000')
        root.style.setProperty('--bg-hover-switch', "#000")
        root.style.setProperty('--color-hover-switch', "#fff")

        
        container.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-1', '#212529')
        root.style.setProperty('--bg-2', '#221f1f')
        root.style.setProperty('--color', '#fff')
        root.style.setProperty('--bg-hover-switch', "#fff")
        root.style.setProperty('--color-hover-switch', "#000")

        container.dataset.theme = 'dark'
    }
}