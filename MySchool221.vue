<template>
  <div id="app">
    <!-- Skip to main content for accessibility -->
    <a href="#main-content" class="skip-link">Passer au contenu principal</a>
    
    <!-- Header -->
    <header class="header" :class="{ scrolled: isScrolled }" id="header">
      <nav class="nav container">
        <div class="nav__brand">
          <a href="#" class="logo" aria-label="MySchool221 - Accueil">
            <span class="logo__icon">🎓</span>
            <span class="logo__text">My<span class="logo__highlight">School</span>221</span>
          </a>
        </div>
        
        <ul class="nav__menu" :class="{ active: isMenuOpen }" id="nav-menu">
          <li class="nav__item" v-for="item in navigationItems" :key="item.id">
            <a :href="item.href" class="nav__link" :class="{ active: activeSection === item.id }" @click="scrollToSection(item.id)">
              {{ item.text }}
            </a>
          </li>
        </ul>
        
        <div class="nav__actions">
          <a href="#contact" class="btn btn--primary btn--sm btn--demo">Avoir un devis</a>
          <button class="nav__toggle" :class="{ active: isMenuOpen }" @click="toggleMenu" aria-label="Menu de navigation">
            <span class="nav__toggle-line"></span>
            <span class="nav__toggle-line"></span>
            <span class="nav__toggle-line"></span>
          </button>
        </div>
      </nav>
      
      <!-- Overlay pour la navigation mobile -->
      <div class="nav__overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
      
      <!-- Bouton de fermeture du menu mobile -->
      <button class="nav__close" :class="{ active: isMenuOpen }" @click="closeMenu" aria-label="Fermer le menu">
        <i class="fas fa-times"></i>
      </button>
    </header>

    <main id="main-content">
      <!-- Hero Section -->
      <section class="hero" id="hero">
        <div class="hero__background">
          <div class="hero__particles"></div>
          <div class="hero__shapes">
            <div class="shape shape--1"></div>
            <div class="shape shape--2"></div>
            <div class="shape shape--3"></div>
          </div>
        </div>
        
        <div class="container">
          <div class="hero__content">
            <div class="hero__text">
              <div class="hero__badge">
                <i class="fas fa-rocket"></i>
                <span>Nouvelle Génération</span>
              </div>
              
              <h1 class="hero__title">
                Révolutionnez votre <span class="text-gradient">gestion scolaire</span> 
                avec une plateforme intelligente
              </h1>
              
              <p class="hero__description">
                MySchool221 transforme l'éducation en Afrique avec une plateforme moderne 
                qui automatise, simplifie et optimise tous les aspects de la gestion scolaire.
              </p>
              
              <div class="hero__stats">
                <div class="stat" v-for="stat in heroStats" :key="stat.id">
                  <span class="stat__number" :data-target="stat.target">{{ stat.current }}</span>
                  <span class="stat__label">{{ stat.label }}</span>
                </div>
              </div>
              
              <div class="hero__actions">
                <a href="#demo" class="btn btn--primary btn--lg">
                  <i class="fas fa-play"></i>
                  Commencer maintenant
                </a>
                <a href="#features" class="btn btn--on-primary btn--lg">
                  <i class="fas fa-info-circle"></i>
                  En savoir plus
                </a>
              </div>
            </div>
            
            <div class="hero__visual">
              <div class="hero__dashboard">
                <div class="dashboard__header">
                  <div class="dashboard__dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span class="dashboard__title">MySchool221</span>
                </div>
                <div class="dashboard__content">
                  <div class="dashboard__metric">
                    <i class="fas fa-users"></i>
                    <div class="metric__info">
                      <span class="metric__number">1,247</span>
                      <span class="metric__label">Élèves actifs</span>
                    </div>
                  </div>
                  <div class="dashboard__progress">
                    <div class="progress__bar">
                      <div class="progress__fill"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="hero__cards">
                <div class="floating-card floating-card--1" v-for="card in floatingCards" :key="card.id" :class="card.class">
                  <div class="card__icon">
                    <i :class="card.icon"></i>
                  </div>
                  <h4>{{ card.title }}</h4>
                  <p>{{ card.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features section" id="features">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">Fonctionnalités</span>
            <h2 class="section__title">Une plateforme complète pour tous vos besoins</h2>
            <p class="section__description">
              Découvrez les outils puissants qui transformeront votre établissement scolaire
            </p>
          </div>
          
          <div class="features__grid">
            <div class="feature-card" v-for="feature in features" :key="feature.id">
              <div class="feature-card__icon">
                <i :class="feature.icon"></i>
              </div>
              <h3 class="feature-card__title">{{ feature.title }}</h3>
              <p class="feature-card__description">{{ feature.description }}</p>
              <ul class="feature-card__list">
                <li v-for="item in feature.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Profiles Section -->
      <section class="profiles section" id="profiles">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">Profils utilisateurs</span>
            <h2 class="section__title">Une solution adaptée à chaque acteur</h2>
            <p class="section__description">
              MySchool221 s'adapte aux besoins spécifiques de chaque utilisateur
            </p>
          </div>
          
          <div class="profiles__grid">
            <div class="profile-card" v-for="profile in profiles" :key="profile.id">
              <div class="profile-card__icon">
                <i :class="profile.icon"></i>
              </div>
              <h3 class="profile-card__title">{{ profile.title }}</h3>
              <p class="profile-card__description">{{ profile.description }}</p>
              <ul class="profile-card__features">
                <li v-for="feature in profile.features" :key="feature">
                  <i class="fas fa-check"></i> {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="pricing section" id="pricing">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">Tarifs</span>
            <h2 class="section__title">Tarifs personnalisés par établissement</h2>
            <p class="section__description">
              Chaque établissement est unique, nos tarifs s'adaptent à vos besoins spécifiques
            </p>
          </div>
          
          <div class="pricing__grid">
            <div class="pricing-card">
              <div class="pricing-card__header">
                <h3 class="pricing-card__title">Tarification personnalisée</h3>
                <div class="pricing-card__price">
                  <span class="price__amount">Sur mesure</span>
                  <span class="price__period"></span>
                </div>
                <p class="pricing-card__description">Adapté à chaque établissement</p>
              </div>
              
              <ul class="pricing-card__features">
                <li v-for="feature in pricingFeatures" :key="feature">
                  <i class="fas fa-check"></i> {{ feature }}
                </li>
              </ul>
              
              <a href="#contact" class="btn btn--primary btn--full">Demander un devis</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="testimonials section" id="testimonials">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">Témoignages</span>
            <h2 class="section__title">Ce que disent nos clients</h2>
            <p class="section__description">
              Découvrez les retours d'expérience des établissements qui utilisent MySchool221
            </p>
          </div>
          
          <div class="testimonials__grid">
            <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
              <div class="testimonial-card__content">
                <div class="testimonial-card__stars">
                  <i class="fas fa-star" v-for="n in 5" :key="n"></i>
                </div>
                <p class="testimonial-card__text">{{ testimonial.text }}</p>
              </div>
              <div class="testimonial-card__author">
                <div class="testimonial-card__avatar">
                  <i class="fas fa-user"></i>
                </div>
                <div class="testimonial-card__info">
                  <h4>{{ testimonial.author }}</h4>
                  <span>{{ testimonial.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq section" id="faq">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">FAQ</span>
            <h2 class="section__title">Questions fréquemment posées</h2>
            <p class="section__description">
              Trouvez rapidement les réponses à vos questions sur MySchool221
            </p>
          </div>
          
          <div class="faq__grid">
            <div class="faq-item" v-for="faq in faqs" :key="faq.id" :class="{ active: faq.isOpen }">
              <div class="faq-item__header" @click="toggleFAQ(faq.id)">
                <h3 class="faq-item__question">{{ faq.question }}</h3>
                <button class="faq-item__toggle" aria-label="Ouvrir la réponse">
                  <i :class="faq.isOpen ? 'fas fa-minus' : 'fas fa-plus'"></i>
                </button>
              </div>
              <div class="faq-item__content">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Demo Section -->
      <section class="demo section" id="demo">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">Démo</span>
            <h2 class="section__title">Essayez MySchool221 gratuitement</h2>
            <p class="section__description">
              Découvrez par vous-même la puissance de notre plateforme avec une démo interactive
            </p>
          </div>
          
          <div class="demo__content">
            <div class="demo__preview">
              <div class="demo__device">
                <div class="demo__screen">
                  <div class="demo__mockup">
                    <div class="demo__header">
                      <div class="demo__dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <span class="demo__title">MySchool221 - Démo</span>
                    </div>
                    <div class="demo__body">
                      <div class="demo__widget" v-for="widget in demoWidgets" :key="widget.id">
                        <i :class="widget.icon"></i>
                        <h4>{{ widget.title }}</h4>
                        <p>{{ widget.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="demo__info">
              <h3>Fonctionnalités de la démo</h3>
              <ul class="demo__features">
                <li v-for="feature in demoFeatures" :key="feature">
                  <i class="fas fa-check"></i> {{ feature }}
                </li>
              </ul>
              
              <div class="demo__actions">
                <a href="#" class="btn btn--primary btn--lg">
                  <i class="fas fa-play"></i>
                  Lancer la démo
                </a>
                <a href="#contact" class="btn btn--on-primary btn--lg">
                  <i class="fas fa-info-circle"></i>
                  Demander une démo personnalisée
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta section">
        <div class="container">
          <div class="cta__content">
            <h2 class="cta__title">Prêt à révolutionner votre gestion scolaire ?</h2>
            <p class="cta__description">
              Rejoignez des centaines d'établissements qui ont déjà fait confiance à MySchool221
            </p>
            <div class="cta__actions">
              <a href="#demo" class="btn btn--primary btn--lg">
                <i class="fas fa-rocket"></i>
                Démarrer gratuitement
              </a>
              <a href="#contact" class="btn btn--on-primary btn--lg">
                <i class="fas fa-phone"></i>
                Parler à un expert
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact section" id="contact">
        <div class="container">
          <div class="contact__grid">
            <div class="contact__info">
              <div class="section__header">
                <span class="section__badge">Contact</span>
                <h2 class="section__title">Parlons de votre projet</h2>
                <p class="section__description">
                  Notre équipe d'experts est là pour vous accompagner dans votre transformation digitale.
                </p>
              </div>
              
              <div class="contact__details">
                <div class="contact__item" v-for="contact in contactInfo" :key="contact.id">
                  <div class="contact__icon">
                    <i :class="contact.icon"></i>
                  </div>
                  <div class="contact__text">
                    <h4>{{ contact.title }}</h4>
                    <p>{{ contact.value }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact__form">
              <form class="form" @submit.prevent="submitContactForm">
                <div class="form__row">
                  <div class="form__group">
                    <input type="text" class="form__input" v-model="contactForm.firstName" placeholder="Prénom *" required>
                  </div>
                  <div class="form__group">
                    <input type="text" class="form__input" v-model="contactForm.lastName" placeholder="Nom *" required>
                  </div>
                </div>
                
                <div class="form__row">
                  <div class="form__group">
                    <input type="email" class="form__input" v-model="contactForm.email" placeholder="Email *" required>
                  </div>
                  <div class="form__group">
                    <input type="tel" class="form__input" v-model="contactForm.phone" placeholder="Téléphone">
                  </div>
                </div>
                
                <div class="form__group">
                  <input type="text" class="form__input" v-model="contactForm.school" placeholder="Nom de l'établissement">
                </div>
                
                <div class="form__group">
                  <select class="form__input form__select" v-model="contactForm.schoolType" required>
                    <option value="">Type d'établissement *</option>
                    <option value="primaire">École Primaire</option>
                    <option value="college">Collège</option>
                    <option value="lycee">Lycée</option>
                    <option value="universite">Université</option>
                    <option value="formation">Centre de Formation</option>
                  </select>
                </div>
                
                <div class="form__group">
                  <textarea class="form__input form__textarea" v-model="contactForm.message" placeholder="Votre message *" required></textarea>
                </div>
                
                <button type="submit" class="btn btn--primary btn--full" :disabled="isSubmitting">
                  <i class="fas fa-paper-plane"></i>
                  {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__section">
            <div class="footer__brand">
              <span class="logo__icon">🎓</span>
              <span class="logo__text">My<span class="logo__highlight">School</span>221</span>
            </div>
            <p class="footer__description">
              La plateforme de gestion scolaire nouvelle génération qui révolutionne l'éducation en Afrique.
            </p>
            <div class="footer__social">
              <a href="#" class="social-link" v-for="social in socialLinks" :key="social.id" :aria-label="social.name">
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
          
          <div class="footer__section" v-for="section in footerSections" :key="section.id">
            <h3 class="footer__title">{{ section.title }}</h3>
            <ul class="footer__links">
              <li v-for="link in section.links" :key="link.id">
                <a :href="link.href">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer__bottom">
          <p>&copy; 2025 MySchool221. Tous droits réservés.</p>
          <div class="footer__legal">
            <a href="#" v-for="legal in legalLinks" :key="legal.id">{{ legal.text }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MySchool221',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      activeSection: 'hero',
      isSubmitting: false,
      
      // Navigation
      navigationItems: [
        { id: 'hero', href: '#hero', text: 'Accueil' },
        { id: 'features', href: '#features', text: 'Fonctionnalités' },
        { id: 'profiles', href: '#profiles', text: 'Profils' },
        { id: 'pricing', href: '#pricing', text: 'Tarifs' },
        { id: 'testimonials', href: '#testimonials', text: 'Témoignages' },
        { id: 'faq', href: '#faq', text: 'FAQ' },
        { id: 'contact', href: '#contact', text: 'Contact' }
      ],
      
      // Hero Stats
      heroStats: [
        { id: 1, target: 500, current: 0, label: 'Écoles' },
        { id: 2, target: 50000, current: 0, label: 'Élèves' },
        { id: 3, target: 99, current: 0, label: '% Satisfaction' }
      ],
      
      // Floating Cards
      floatingCards: [
        { id: 1, class: 'floating-card--1', icon: 'fas fa-graduation-cap', title: 'Gestion intelligente', description: 'Automatisation complète' },
        { id: 2, class: 'floating-card--2', icon: 'fas fa-chart-line', title: 'Analytics avancés', description: 'Suivi en temps réel' },
        { id: 3, class: 'floating-card--3', icon: 'fas fa-mobile-alt', title: 'Accès mobile', description: 'Partout, tout le temps' }
      ],
      
      // Features
      features: [
        {
          id: 1,
          icon: 'fas fa-cogs',
          title: 'Automatisation intelligente',
          description: 'Automatisez les tâches répétitives et optimisez votre planning et vos rapports.',
          items: ['Génération automatique de bulletins', 'Optimisation des emplois du temps', 'Gestion automatisée des absences']
        },
        {
          id: 2,
          icon: 'fas fa-chart-line',
          title: 'Analytics & Rapports',
          description: 'Suivez les performances en temps réel avec des tableaux de bord personnalisables.',
          items: ['Tableaux de bord interactifs', 'Rapports automatisés', 'Métriques en temps réel']
        },
        {
          id: 3,
          icon: 'fas fa-comments',
          title: 'Communication unifiée',
          description: 'Centralisez tous vos échanges avec un système de messagerie intégré.',
          items: ['Messagerie instantanée', 'Notifications push', 'Groupes de discussion']
        },
        {
          id: 4,
          icon: 'fas fa-shield-alt',
          title: 'Sécurité des données',
          description: 'Protégez vos données scolaires avec des protocoles de sécurité robustes.',
          items: ['Chiffrement des données sensibles', 'Authentification sécurisée', 'Sauvegardes automatiques']
        },
        {
          id: 5,
          icon: 'fas fa-mobile-alt',
          title: 'Application mobile',
          description: 'Accédez à toutes les fonctionnalités depuis votre smartphone.',
          items: ['iOS et Android', 'Interface responsive', 'Notifications push']
        },
        {
          id: 6,
          icon: 'fas fa-cogs',
          title: 'Configuration flexible',
          description: 'Adaptez la plateforme aux besoins de votre établissement.',
          items: ['Paramètres personnalisables', 'Gestion des rôles', 'Intégration système existant']
        }
      ],
      
      // Profiles
      profiles: [
        {
          id: 1,
          icon: 'fas fa-school',
          title: 'Administration',
          description: 'Gérez votre établissement avec une vue d\'ensemble complète et des outils puissants.',
          features: ['Gestion des inscriptions', 'Suivi des paiements', 'Emplois du temps', 'Rapports et statistiques', 'Gestion du personnel']
        },
        {
          id: 2,
          icon: 'fas fa-chalkboard-teacher',
          title: 'Professeurs',
          description: 'Simplifiez votre enseignement et améliorez le suivi pédagogique.',
          features: ['Saisie des notes', 'Création d\'évaluations', 'Suivi des absences', 'Génération de bulletins', 'Communication parents']
        },
        {
          id: 3,
          icon: 'fas fa-users',
          title: 'Parents',
          description: 'Suivez la scolarité de vos enfants en temps réel et en toute transparence.',
          features: ['Suivi des résultats', 'Consultation des bulletins', 'Monitoring des absences', 'Suivi des paiements', 'Communication directe']
        },
        {
          id: 4,
          icon: 'fas fa-user-graduate',
          title: 'Élèves',
          description: 'Accédez facilement à toutes vos informations scolaires et ressources.',
          features: ['Consultation des notes', 'Emploi du temps', 'Devoirs et évaluations', 'Suivi de l\'assiduité', 'Ressources pédagogiques']
        }
      ],
      
      // Pricing Features
      pricingFeatures: [
        'Analyse de vos besoins',
        'Devis personnalisé',
        'Fonctionnalités adaptées',
        'Support dédié'
      ],
      
      // Testimonials
      testimonials: [
        {
          id: 1,
          text: "MySchool221 a révolutionné notre gestion administrative. L'automatisation des tâches nous fait gagner un temps précieux et améliore la qualité de nos services.",
          author: 'Mamadou Diallo',
          role: 'Directeur - École Excellence'
        },
        {
          id: 2,
          text: "La communication avec les parents s'est considérablement améliorée. L'interface intuitive et les notifications en temps réel facilitent grandement nos échanges.",
          author: 'Fatou Sall',
          role: 'Responsable pédagogique - Collège Moderne'
        },
        {
          id: 3,
          text: "En tant que parent, j'apprécie la transparence et l'accessibilité de la plateforme. Je peux suivre la scolarité de mes enfants en temps réel.",
          author: 'Ousmane Ba',
          role: 'Parent d\'élève'
        }
      ],
      
      // FAQ
      faqs: [
        {
          id: 1,
          question: 'Comment fonctionne l\'intégration avec votre système existant ?',
          answer: 'Notre plateforme s\'intègre facilement avec vos systèmes existants grâce à des API robustes et des connecteurs standards. Nous assurons une migration en douceur de vos données.',
          isOpen: false
        },
        {
          id: 2,
          question: 'Quels sont les délais de mise en place ?',
          answer: 'La mise en place prend généralement 2-4 semaines selon la taille de votre établissement. Notre équipe vous accompagne à chaque étape du processus.',
          isOpen: false
        },
        {
          id: 3,
          question: 'La plateforme est-elle accessible hors ligne ?',
          answer: 'Oui, l\'application mobile fonctionne en mode hors ligne pour certaines fonctionnalités. Les données se synchronisent automatiquement une fois la connexion rétablie.',
          isOpen: false
        },
        {
          id: 4,
          question: 'Comment fonctionne le système de paiement ?',
          answer: 'Nous utilisons un système de paiement externe sécurisé et fiable. Les paiements sont traités par des prestataires de paiement reconnus, garantissant la sécurité des transactions.',
          isOpen: false
        }
      ],
      
      // Demo Widgets
      demoWidgets: [
        { id: 1, icon: 'fas fa-chart-bar', title: 'Tableau de bord', description: 'Vue d\'ensemble en temps réel' },
        { id: 2, icon: 'fas fa-users', title: 'Gestion des élèves', description: 'Profils complets et suivi' },
        { id: 3, icon: 'fas fa-calendar-alt', title: 'Emplois du temps', description: 'Planification intelligente' }
      ],
      
      // Demo Features
      demoFeatures: [
        'Accès aux fonctionnalités principales',
        'Données d\'exemple réalistes',
        'Aucune inscription requise',
        'Support technique disponible'
      ],
      
      // Contact Info
      contactInfo: [
        { id: 1, icon: 'fas fa-map-marker-alt', title: 'Adresse', value: 'Almadies, Dakar, Sénégal' },
        { id: 2, icon: 'fas fa-phone', title: 'Téléphone', value: '+221 77 123 45 67' },
        { id: 3, icon: 'fas fa-envelope', title: 'Email', value: 'contact@myschool221.com' }
      ],
      
      // Contact Form
      contactForm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        school: '',
        schoolType: '',
        message: ''
      },
      
      // Social Links
      socialLinks: [
        { id: 1, name: 'Facebook', icon: 'fab fa-facebook-f' },
        { id: 2, name: 'Twitter', icon: 'fab fa-twitter' },
        { id: 3, name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
        { id: 4, name: 'Instagram', icon: 'fab fa-instagram' }
      ],
      
      // Footer Sections
      footerSections: [
        {
          id: 1,
          title: 'Produit',
          links: [
            { id: 1, href: '#features', text: 'Fonctionnalités' },
            { id: 2, href: '#profiles', text: 'Profils' },
            { id: 3, href: '#pricing', text: 'Tarifs' },
            { id: 4, href: '#testimonials', text: 'Témoignages' },
            { id: 5, href: '#demo', text: 'Démo' }
          ]
        },
        {
          id: 2,
          title: 'Support',
          links: [
            { id: 1, href: '#contact', text: 'Contact' },
            { id: 2, href: '#', text: 'Documentation' },
            { id: 3, href: '#', text: 'Formation' },
            { id: 4, href: '#faq', text: 'FAQ' }
          ]
        },
        {
          id: 3,
          title: 'Entreprise',
          links: [
            { id: 1, href: '#', text: 'À propos' },
            { id: 2, href: '#', text: 'Carrières' },
            { id: 3, href: '#', text: 'Blog' },
            { id: 4, href: '#', text: 'Partenaires' }
          ]
        }
      ],
      
      // Legal Links
      legalLinks: [
        { id: 1, text: 'Mentions légales' },
        { id: 2, text: 'Politique de confidentialité' },
        { id: 3, text: 'Conditions d\'utilisation' }
      ]
    }
  },
  
  mounted() {
    this.initScrollHandler()
    this.initIntersectionObserver()
    this.animateCounters()
  },
  
  methods: {
    // Navigation
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    },
    
    scrollToSection(sectionId) {
      this.closeMenu()
      this.activeSection = sectionId
      
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = document.getElementById('header').offsetHeight
        const targetPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    },
    
    // Scroll Handler
    initScrollHandler() {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50
      })
    },
    
    // Intersection Observer
    initIntersectionObserver() {
      const sections = document.querySelectorAll('section[id]')
      const headerHeight = document.getElementById('header').offsetHeight
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            if (this.navigationItems.find(item => item.id === sectionId)) {
              this.activeSection = sectionId
            }
          }
        })
      }, {
        threshold: 0.3,
        rootMargin: `-${headerHeight}px 0px 0px 0px`
      })
      
      sections.forEach(section => {
        observer.observe(section)
      })
    },
    
    // Counter Animation
    animateCounters() {
      const counters = document.querySelectorAll('.stat__number')
      
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target)
        const duration = 2000
        const step = target / (duration / 16)
        let current = 0
        
        const timer = setInterval(() => {
          current += step
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          
          const statId = counter.closest('.stat').querySelector('.stat__number').dataset.target
          const stat = this.heroStats.find(s => s.target.toString() === statId)
          if (stat) {
            stat.current = Math.floor(current)
          }
        }, 16)
      })
    },
    
    // FAQ Toggle
    toggleFAQ(faqId) {
      const faq = this.faqs.find(f => f.id === faqId)
      if (faq) {
        faq.isOpen = !faq.isOpen
      }
    },
    
    // Contact Form
    async submitContactForm() {
      this.isSubmitting = true
      
      try {
        // Simuler l'envoi du formulaire
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Réinitialiser le formulaire
        this.contactForm = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          school: '',
          schoolType: '',
          message: ''
        }
        
        // Afficher un message de succès
        alert('Message envoyé avec succès ! Nous vous recontacterons bientôt.')
        
      } catch (error) {
        console.error('Erreur lors de l\'envoi:', error)
        alert('Une erreur est survenue. Veuillez réessayer.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
/* ===== VARIABLES CSS ===== */
:root {
  /* Colors */
  --primary-color: #407CEE;
  --primary-light: #407CEE;
  --primary-dark: #407CEE;
  --secondary-color: #F7B000;
  --secondary-light: #F7B000;
  --secondary-dark: #F7B000;
  
  /* Neutral colors */
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  /* Semantic colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;
  
  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  --font-size-6xl: 3.75rem;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  --spacing-4xl: 8rem;
  
  /* Border radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
  
  /* Z-index */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal: 1040;
  --z-popover: 1050;
  --z-tooltip: 1060;
}

/* ===== RESET & BASE STYLES ===== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--gray-800);
  background-color: var(--white);
}

/* ===== TYPOGRAPHY ===== */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
}

h1 { font-size: var(--font-size-5xl); }
h2 { font-size: var(--font-size-4xl); }
h3 { font-size: var(--font-size-3xl); }
h4 { font-size: var(--font-size-2xl); }
h5 { font-size: var(--font-size-xl); }
h6 { font-size: var(--font-size-lg); }

p {
  margin-bottom: var(--spacing-md);
  line-height: 1.7;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--primary-dark);
}

ul, ol {
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-lg);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ===== LAYOUT ===== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.section {
  padding: var(--spacing-4xl) 0;
}

.section__header {
  text-align: center;
  margin-bottom: var(--spacing-4xl);
}

.section__badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--secondary-color), var(--secondary-light));
  color: var(--white);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow-md);
}

.section__title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  color: var(--gray-900);
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
}

.section__description {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== ACCESSIBILITY ===== */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-color);
  color: var(--white);
  padding: 8px;
  text-decoration: none;
  border-radius: var(--radius-md);
  z-index: var(--z-fixed);
  transition: top var(--transition-normal);
}

.skip-link:focus {
  top: 6px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .section {
    padding: var(--spacing-3xl) 0;
  }
  
  .section__title {
    font-size: var(--font-size-3xl);
  }
  
  .section__description {
    font-size: var(--font-size-base);
  }
}

@media (max-width: 480px) {
  .section__title {
    font-size: var(--font-size-2xl);
  }
  
  .section__badge {
    font-size: var(--font-size-xs);
  }
}
</style> 