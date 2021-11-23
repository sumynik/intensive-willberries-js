const cart = function() {
    const cartBtn = document.querySelector('.button-cart')
    // const cartModal = document.querySelector('#modal-cart')
    const cartModal = document.getElementById('modal-cart')
    const closeBtn = cartModal.querySelector('.modal-close');
    const goodsContainer = document.querySelector('.long-goods-list')
    const cartTable = document.querySelector('.cart-table__goods')
    const modalForm = document.querySelector('.modal-form')

    const addToCart = id => {
        const goods = JSON.parse(localStorage.getItem('goods'))
        const clickedGood = goods.find(good => good.id === id)
        const cart = localStorage.getItem('cart') ?
                    JSON.parse(localStorage.getItem('cart')) : []
        cart.some(good => good.id === clickedGood.id)
        if(cart.some(good => good.id === clickedGood.id)){
            cart.map(good => {
                if(good.id === clickedGood.id){
                    good.count++
                }
                return good
            })
        } else {
            clickedGood.count = 1
            cart.push(clickedGood)
        }

        localStorage.setItem('cart', JSON.stringify(cart))
    }
    
    const deleteCartItem = id => {
        const cart = JSON.parse(localStorage.getItem('cart'))

        const newCart = cart.filter(good => {
            return good.id !== id
        })

        localStorage.setItem('cart', JSON.stringify(newCart))
        renderCartGoods(newCart)
    }
        
    const plusCartItem = id => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const newCart = cart.map(good => {
            if(good.id === id){
                good.count++
            }
            return good
        })
        localStorage.setItem('cart', JSON.stringify(newCart))
        renderCartGoods(newCart)
    }
        
    const minusCartItem = id => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const newCart = cart.map(good => {
            if(good.id === id && good.count > 1){
                good.count--
            }
            return good
        })
        localStorage.setItem('cart', JSON.stringify(newCart))
        renderCartGoods(newCart)
    }

    const renderCartGoods = goods => {
        cartTable.innerHTML = ''
        goods.forEach(good => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${good.name}</td>
                <td>${good.price}$</td>
                <td><button class="cart-btn-minus" "="">-</button></td>
                <td>${good.count}</td>
                <td><button class="cart-btn-plus" "="">+</button></td>
                <td>${+good.price * +good.count}$</td>
                <td><button class="cart-btn-delete" "="">x</button></td>
            `
            cartTable.append(tr)

            tr.addEventListener('click', evt => {
                if (evt.target.classList.contains('cart-btn-minus')){
                    minusCartItem(good.id)
                } else if (evt.target.classList.contains('cart-btn-plus')) {
                    plusCartItem(good.id)
                } else if (evt.target.classList.contains('cart-btn-delete')) {
                    deleteCartItem(good.id)
                }
            })
        });
    }

    const sendForm = () => {
        const cartData = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                    cart: cartData,
                    name: '',
                    phone: ''
            })
        }).then(() => {
            cartModal.style.display = '';
            localStorage.setItem('cart', JSON.stringify([]))
        })
    }

    modalForm.addEventListener('submit', evt => {
        evt.preventDefault();
        sendForm()
    })
    
    cartBtn.addEventListener('click', function () {
        const cartArray = localStorage.getItem('cart') ?
                    JSON.parse(localStorage.getItem('cart')) : []

        renderCartGoods(cartArray)

        cartModal.style.display = 'flex';
    })
    
    closeBtn.addEventListener('click', function () {
        cartModal.style.display = '';
    })

    if(goodsContainer) {
        goodsContainer.addEventListener('click', evt => {
            if(evt.target.closest('.add-to-cart')){
                const buttonToCart = evt.target.closest('.add-to-cart')
                const goodId = buttonToCart.dataset.id
                addToCart(goodId)
                
            }
        })
    }

    cartModal.addEventListener('click', evt => {
        if(!evt.target.closest('.modal') && evt.target.classList.contains('overlay')){
            cartModal.style.display = '';
        }
    })

    window.addEventListener('keydown', evt => {
        if(evt.key === 'Escape'){
            cartModal.style.display = '';
        }
    })
}

export default cart
