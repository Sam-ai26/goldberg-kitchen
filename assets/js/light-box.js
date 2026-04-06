const images = document.querySelectorAll('.gallery-img');
  const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
  const modalImage = document.getElementById('lightboxImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  const showImage = (index) => {
    if (index >= 0 && index < images.length) {
      modalImage.src = images[index].src;
      modalImage.alt = images[index].alt;
      currentIndex = index;
    }
  };

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      showImage(index);
      modal.show();
    });
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      showImage(currentIndex - 1);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      showImage(currentIndex + 1);
    }
  });