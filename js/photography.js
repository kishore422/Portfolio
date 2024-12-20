// JavaScript for handling the photography showcase

// Gallery Images - Add your 27 images here
const galleryImages = Array.from({ length: 27 }, (_, i) => `photography/${i + 1}.jpg`);

// Select DOM Elements
const galleryContainer = document.querySelector('.gallery-container');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const caption = document.getElementById('caption');
const closeModal = document.querySelector('.modal .close');

// Populate Gallery
galleryImages.forEach((src, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    const img = document.createElement('img');
    img.className = 'gallery-img';
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.onerror = function () {
        this.style.display = 'none'; // Hide broken images
    };

    galleryItem.appendChild(img);
    galleryContainer.appendChild(galleryItem);

    // Add click event to open modal
    img.addEventListener('click', () => {
        modal.classList.add('active');
        modalImage.src = src;
        caption.textContent = `Image ${index + 1}`;
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalImage.src = '';
    caption.textContent = '';
});

// Close Modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        modalImage.src = '';
        caption.textContent = '';
    }
});
