let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

document.querySelectorAll('.add-to-wishlist').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const name = button.dataset.name;

    const existing = wishlist.find(p => p.id === id);
    if (existing) {
      existing.likes += 1;
    } else {
      wishlist.push({ id, name, likes: 1 });
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    alert(`Bạn đã yêu thích ${name}!`);
  });
});

function updateWishlistCount() {
  let total = wishlist.reduce((sum, p) => sum + p.likes, 0);
  document.getElementById('wishlist-count').textContent = total;
}
updateWishlistCount();
