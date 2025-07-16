document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-button-group button');
    const galleryItems = document.querySelectorAll('.gallery-list .gallery-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remueve clase "active" de todos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agrega clase "active" al actual
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === '*' || item.classList.contains(filter.slice(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

