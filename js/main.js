/**
 * MySchool221 - Main JavaScript File
 */

// ===== UTILITY FUNCTIONS =====
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ===== NAVIGATION =====
class Navigation {
  constructor() {
    this.header = $('#header');
    this.navToggle = $('#nav-toggle');
    this.navMenu = $('#nav-menu');
    this.navOverlay = $('#nav-overlay');
    this.navClose = $('#nav-close');
    this.navLinks = $$('.nav__link');
    this.isMenuOpen = false;
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.handleScroll();
  }
  
  bindEvents() {
    // Mobile menu toggle
    this.navToggle?.addEventListener('click', () => this.openMenu());
    
    // Close menu with close button
    this.navClose?.addEventListener('click', () => this.closeMenu());
    
    // Close menu with overlay
    this.navOverlay?.addEventListener('click', () => this.closeMenu());
    
    // Smooth scrolling for navigation links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuOpen) {
        this.closeMenu();
      }
    });
  }
  
  openMenu() {
    this.isMenuOpen = true;
    this.navMenu?.classList.add('active');
    this.navToggle?.classList.add('active');
    this.navOverlay?.classList.add('active');
    this.navClose?.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus management
    this.navClose?.focus();
  }
  
  closeMenu() {
    this.isMenuOpen = false;
    this.navMenu?.classList.remove('active');
    this.navToggle?.classList.remove('active');
    this.navOverlay?.classList.remove('active');
    this.navClose?.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Return focus to toggle button
    this.navToggle?.focus();
  }
  
  handleNavClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = $(targetId);
    
    if (targetSection) {
      this.closeMenu();
      this.scrollToSection(targetSection);
    }
  }
  
  scrollToSection(section) {
    const headerHeight = this.header.offsetHeight;
    const targetPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  
  handleScroll() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 100) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    });
  }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
  constructor() {
    this.animatedElements = $$('.animate-on-scroll');
    this.init();
  }
  
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    this.animatedElements.forEach(el => observer.observe(el));
  }
}

// ===== COUNTER ANIMATIONS =====
class CounterAnimations {
  constructor() {
    this.counters = $$('[data-target]');
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
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      element.textContent = this.formatNumber(Math.floor(current));
    }, 16);
  }
  
  formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K+';
    }
    return num.toString();
  }
}

// ===== FAQ HANDLER =====
class FAQHandler {
  constructor() {
    this.faqItems = $$('.faq-item');
    this.init();
  }
  
  init() {
    if (this.faqItems.length > 0) {
      this.bindEvents();
    }
  }
  
  bindEvents() {
    this.faqItems.forEach(item => {
      const header = item.querySelector('.faq-item__header');
      header?.addEventListener('click', () => this.toggleFAQ(item));
    });
  }
  
  toggleFAQ(item) {
    const isActive = item.classList.contains('active');
    
    // Close all other FAQ items
    this.faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    if (isActive) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  }
}

// ===== FORM HANDLING =====
class FormHandler {
  constructor() {
    this.contactForm = $('#contactForm');
    this.init();
  }
  
  init() {
    if (this.contactForm) {
      this.bindEvents();
    }
  }
  
  bindEvents() {
    this.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    const submitBtn = this.contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true;
    
    try {
      // Simulate form submission
      await this.simulateSubmission();
      
      // Show success state
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
      submitBtn.style.background = '#10b981';
      
      // Reset form after delay
      setTimeout(() => {
        this.contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 2000);
      
    } catch (error) {
      // Show error state
      submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Erreur';
      submitBtn.style.background = '#ef4444';
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 2000);
    }
  }
  
  simulateSubmission() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }
}

// ===== MAIN APPLICATION =====
class App {
  constructor() {
    this.modules = {};
    this.init();
  }
  
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      this.start();
    }
  }
  
  start() {
    try {
      this.modules.navigation = new Navigation();
      this.modules.scrollAnimations = new ScrollAnimations();
      this.modules.counterAnimations = new CounterAnimations();
      this.modules.faqHandler = new FAQHandler();
      this.modules.formHandler = new FormHandler();
      
      console.log('MySchool221 - Application initialisée avec succès');
      
    } catch (error) {
      console.error('Erreur lors de l\'initialisation:', error);
    }
  }
}

// ===== INITIALIZE APPLICATION =====
new App(); 