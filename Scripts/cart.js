let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: parseInt(button.dataset.price)
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(product.name + " đã thêm vào giỏ hàng!");
  });
});

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}
updateCartCount();
