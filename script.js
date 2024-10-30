document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    mobileMenu.classList.toggle('hidden');
    this.setAttribute('aria-expanded', !isExpanded);
    
    const openIcon = this.querySelector('svg:first-child');
    const closeIcon = this.querySelector('svg:last-child');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
const carouselItems = document.querySelectorAll(".carousel_item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


let i = 1;


setInterval(() => {
 
  Array.from(carouselItems).forEach((item, index) => {
    
    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 100}%)`;
    }
  });

  
  if (i < carouselItems.length) {
    i++;
  } else {
    i = 0;
  }
}, 2000);