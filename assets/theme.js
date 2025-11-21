tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: 'var(--brand-black)',
          charcoal: 'var(--brand-charcoal)',
          red: 'var(--brand-red)', 
          glass: 'rgba(18, 18, 18, 0.7)',
        }
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'spotlight': 'radial-gradient(circle at center, rgba(50,50,50,0.4) 0%, var(--brand-black) 70%)',
        'red-glow': 'radial-gradient(circle at center, rgba(208,0,0,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  
  const header = document.querySelector('[data-header]');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  const productCarousels = document.querySelectorAll('[data-product-carousel]');
  productCarousels.forEach(carousel => {
    const scrollContainer = carousel.querySelector('[data-carousel-scroll]');
    const leftBtn = carousel.querySelector('[data-carousel-left]');
    const rightBtn = carousel.querySelector('[data-carousel-right]');
    
    if (scrollContainer && leftBtn && rightBtn) {
      leftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
      });
      
      rightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
      });
    }
  });

  const cartButtons = document.querySelectorAll('[data-add-to-cart]');
  cartButtons.forEach(button => {
    button.addEventListener('click', async function(e) {
      e.preventDefault();
      const variantId = this.dataset.variantId;
      const originalText = this.innerHTML;
      
      if (!variantId) {
        console.error('No variant ID found');
        return;
      }
      
      this.disabled = true;
      this.innerHTML = 'Adding...';
      
      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: variantId,
            quantity: 1
          })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          this.innerHTML = 'Added!';
          setTimeout(() => {
            window.location.href = '/cart';
          }, 500);
        } else {
          throw new Error(data.description || 'Failed to add to cart');
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
        this.innerHTML = 'Error';
        setTimeout(() => {
          this.innerHTML = originalText;
          this.disabled = false;
        }, 2000);
      }
    });
  });
});