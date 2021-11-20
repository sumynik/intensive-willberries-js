const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        // https://firebase.google.com/
        fetch('https://test-js-willberries-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                localStorage.setItem('goods', JSON.stringify(data))
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            // console.log(event.target.text);
            getData()
        })
    })

    // localStorage.setItem('goods', JSON.stringify({name: 'all'}))

    // const goods = JSON.parse(localStorage.getItem('goods'))
    // console.log(goods);

    // localStorage.removeItem('goods')
}

export default getGoods

