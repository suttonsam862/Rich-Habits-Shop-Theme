// Mobile Menu Logic
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const body = document.body;
  if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    body.style.overflow = 'hidden';
  } else {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    body.style.overflow = 'auto';
  }
}

// Simple Scroll Listener for Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('bg-brand-black/90', 'backdrop-blur-xl', 'border-b', 'border-white/5', 'py-4');
    header.classList.remove('bg-gradient-to-b', 'py-6');
  } else {
    header.classList.remove('bg-brand-black/90', 'backdrop-blur-xl', 'border-b', 'border-white/5', 'py-4');
    header.classList.add('bg-gradient-to-b', 'py-6');
  }
});