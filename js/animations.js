/**
 * MySchool221 - Animations JavaScript
 * Gère les animations avancées et les interactions
 */

// ===== ANIMATION CONTROLLER =====
class AnimationController {
  constructor() {
    this.animations = new Map();
    this.init();
  }
  
  init() {
    this.setupScrollAnimations();
    this.setupHoverAnimations();
    this.setupParallaxEffects();
  }
  
  // ===== SCROLL ANIMATIONS =====
  setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animation = element.dataset.aos;
          const delay = element.dataset.aosDelay || 0;
          
          setTimeout(() => {
            this.playAnimation(element, animation);
          }, delay);
          
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
  }
  
  playAnimation(element, animation) {
    element.style.animationPlayState = 'running';
    element.classList.add('animate', `animate--${animation}`);
    
    // Remove animation classes after completion
    element.addEventListener('animationend', () => {
      element.classList.remove('animate', `animate--${animation}`);
    }, { once: true });
  }
  
  // ===== HOVER ANIMATIONS =====
  setupHoverAnimations() {
    // Floating cards hover effect
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.addHoverEffect(card, 'float');
      });
      
      card.addEventListener('mouseleave', () => {
        this.removeHoverEffect(card, 'float');
      });
    });
    
    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.addHoverEffect(card, 'scale');
      });
      
      card.addEventListener('mouseleave', () => {
        this.removeHoverEffect(card, 'scale');
      });
    });
  }
  
  addHoverEffect(element, effect) {
    element.classList.add(`hover--${effect}`);
  }
  
  removeHoverEffect(element, effect) {
    element.classList.remove(`hover--${effect}`);
  }
  
  // ===== PARALLAX EFFECTS =====
  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.shape, .hero__particles');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }
}

// ===== PARTICLE SYSTEM =====
class ParticleSystem {
  constructor() {
    this.particles = [];
    this.canvas = null;
    this.ctx = null;
    this.init();
  }
  
  init() {
    this.createCanvas();
    this.createParticles();
    this.animate();
  }
  
  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'particle-canvas';
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '1';
    
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.appendChild(this.canvas);
      this.resizeCanvas();
    }
    
    this.ctx = this.canvas.getContext('2d');
    
    window.addEventListener('resize', () => this.resizeCanvas());
  }
  
  resizeCanvas() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }
  
  createParticles() {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;
      
      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      this.ctx.fill();
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// ===== TYPING ANIMATION =====
class TypingAnimation {
  constructor() {
    this.elements = document.querySelectorAll('[data-typing]');
    this.init();
  }
  
  init() {
    this.elements.forEach(element => {
      this.animateTyping(element);
    });
  }
  
  animateTyping(element) {
    const text = element.textContent;
    const speed = element.dataset.typingSpeed || 100;
    
    element.textContent = '';
    element.style.borderRight = '2px solid var(--secondary-color)';
    
    let i = 0;
    const timer = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      
      if (i >= text.length) {
        clearInterval(timer);
        element.style.borderRight = 'none';
      }
    }, speed);
  }
}

// ===== MORPHING SHAPES =====
class MorphingShapes {
  constructor() {
    this.shapes = document.querySelectorAll('.shape');
    this.init();
  }
  
  init() {
    this.shapes.forEach((shape, index) => {
      this.animateShape(shape, index);
    });
  }
  
  animateShape(shape, index) {
    const animations = [
      'float-shapes',
      'rotate-shapes',
      'scale-shapes'
    ];
    
    const animation = animations[index % animations.length];
    const delay = index * 0.5;
    
    shape.style.animation = `${animation} 8s ease-in-out infinite`;
    shape.style.animationDelay = `${delay}s`;
  }
}

// ===== PROGRESS BARS =====
class ProgressBars {
  constructor() {
    this.bars = document.querySelectorAll('.progress__fill');
    this.init();
  }
  
  init() {
    this.bars.forEach(bar => {
      this.animateProgress(bar);
    });
  }
  
  animateProgress(bar) {
    const targetWidth = bar.style.width || '75%';
    const currentWidth = '0%';
    
    bar.style.width = currentWidth;
    
    setTimeout(() => {
      bar.style.transition = 'width 2s ease-in-out';
      bar.style.width = targetWidth;
    }, 500);
  }
}

// ===== COUNTER ANIMATIONS =====
class AdvancedCounters {
  constructor() {
    this.counters = document.querySelectorAll('[data-counter]');
    this.init();
  }
  
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    this.counters.forEach(counter => observer.observe(counter));
  }
  
  animateCounter(element) {
    const target = parseInt(element.dataset.counter);
    const duration = parseInt(element.dataset.duration) || 2000;
    const easing = element.dataset.easing || 'easeOutQuart';
    
    this.countUp(element, target, duration, easing);
  }
  
  countUp(element, target, duration, easing) {
    const start = 0;
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = this.easeOutQuart(progress);
      const current = Math.floor(start + (target - start) * easedProgress);
      
      element.textContent = this.formatNumber(current);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }
  
  easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }
  
  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }
}

// ===== MOUSE FOLLOW EFFECTS =====
class MouseFollowEffects {
  constructor() {
    this.cursor = null;
    this.init();
  }
  
  init() {
    this.createCursor();
    this.bindEvents();
  }
  
  createCursor() {
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    this.cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: var(--secondary-color);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      mix-blend-mode: difference;
    `;
    
    document.body.appendChild(this.cursor);
  }
  
  bindEvents() {
    document.addEventListener('mousemove', (e) => {
      this.cursor.style.left = e.clientX - 10 + 'px';
      this.cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.style.transform = 'scale(2)';
      });
      
      el.addEventListener('mouseleave', () => {
        this.cursor.style.transform = 'scale(1)';
      });
    });
  }
}

// ===== INITIALIZE ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
  new AnimationController();
  new ParticleSystem();
  new TypingAnimation();
  new MorphingShapes();
  new ProgressBars();
  new AdvancedCounters();
  new MouseFollowEffects();
});

// ===== EXPORT FOR MODULE USAGE =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AnimationController,
    ParticleSystem,
    TypingAnimation,
    MorphingShapes,
    ProgressBars,
    AdvancedCounters,
    MouseFollowEffects
  };
} 