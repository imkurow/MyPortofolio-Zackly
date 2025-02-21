function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.project-carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const cards = document.querySelectorAll('.project-card');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  let currentIndex = 0;
  const cardsPerView = window.innerWidth <= 768 ? 1 : 2;
  const maxIndex = Math.ceil(cards.length / cardsPerView) - 1;

  // Buat dots sesuai jumlah halaman
  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function updateButtons() {
    // Update tombol previous
    if (currentIndex === 0) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }
    
    // Update tombol next
    if (currentIndex === maxIndex) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    const offset = -(currentIndex * (100 / cardsPerView));
    carousel.style.transform = `translateX(${offset}%)`;
    updateDots();
    updateButtons();
  }

  // Event listener untuk tombol previous
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  });

  // Event listener untuk tombol next
  nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    }
  });

  // Inisialisasi state awal
  updateButtons();
});