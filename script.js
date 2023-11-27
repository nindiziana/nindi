function selectProduct(element) {

    var products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.classList.remove('selected');
    });

    element.classList.add('selected');
}

function handleSwipe(containerElement) {
    var hammer = new Hammer(containerElement);

    hammer.on('swipeleft', function () {
        navigateProduct('next');
    });

    hammer.on('swiperight', function () {
        navigateProduct('prev');
    });
}

