const smoothScroll = () => {
    const links = document.querySelectorAll('.scroll-link');

    links.forEach(link => {
        link.addEventListener('click', evt => {
            evt.preventDefault()

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    })
}

export default smoothScroll