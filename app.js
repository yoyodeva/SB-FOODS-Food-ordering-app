document.addEventListener('DOMContentLoaded', () => {
    // Fetch menu items from the backend API
    fetch('http://localhost:5000/api/menu')
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.querySelector('.menu-container');
            menuContainer.innerHTML = '';  // Clear existing items

            data.forEach(item => {
                // Create menu item elements dynamically
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                menuItem.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                    <button class="add-to-cart">Add to Cart</button>
                `;

                // Append the menu item to the menu container
                menuContainer.appendChild(menuItem);

                // Handle Add to Cart button click
                menuItem.querySelector('.add-to-cart').addEventListener('click', () => {
                    addToCart(item);
                });
            });
        })
        .catch(error => console.error('Error fetching menu:', error));

    const cartItems = [];
    const cartContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');

    function addToCart(item) {
        cartItems.push(item);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartContainer.innerHTML = '';  // Clear previous items

        let total = 0;
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartContainer.appendChild(cartItem);

            total += item.price;
        });

        totalAmount.textContent = total.toFixed(2);
    }
});
