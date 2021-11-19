const cart = function() {
    const cartBtn = document.querySelector('.button-cart')
    // const cartModal = document.querySelector('#modal-cart')
    const cartModal = document.getElementById('modal-cart')
    const closeBtn = cartModal.querySelector('.modal-close');
    
    // console.dir(cartBtn)
    // cartBtn.onclick = function () {
    //     console.log('click');
    // }
    
    cartBtn.addEventListener('click', function () {
        cartModal.style.display = 'flex';
    })
    
    closeBtn.addEventListener('click', function () {
        cartModal.style.display = '';
    })
}

cart()
