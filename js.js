const products = [
   
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Orange', price: 1.29 },
    { id: 3, name: 'Mango', price: 2.99 },
    
];

const cartItems = [];

function renderProducts() {
    const productSection = document.querySelector('.product-list');
    productSection.innerHTML = '';

    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productSection.appendChild(productCard);
    });
}

function addToCart(productId) {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
        cartItems.push(productToAdd);
        updateCart();
    }
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cartItems.forEach((item) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(cartItem);
    });
}

function checkout() {
    
    alert('Checkout functionality will be implemented in the next steps.');
}

renderProducts();
