// Adicionando animação ao passar o mouse sobre o produto
const productItems = document.querySelectorAll('.product-item');

productItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = "scale(1.05)";
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = "scale(1)";
    });
});
