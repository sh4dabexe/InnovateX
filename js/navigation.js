/**
 * InnovateX 2026 — Navigation & Scroll Interactions
 */

(function () {
  'use strict';

  function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .navbar-logo');
    const sections = document.querySelectorAll('section[id], header[id]');

    // Scroll state handler for sticky glass navbar
    function handleScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }

      // Update active links based on scroll position
      let currentSectionId = '';
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          }
        });
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Mobile menu toggle
    function toggleMobileMenu(forceClose = false) {
      const isOpen = forceClose ? false : !mobileDrawer.classList.contains('is-open');

      if (isOpen) {
        mobileDrawer.classList.add('is-open');
        navToggle.classList.add('is-active');
        navToggle.setAttribute('aria-expanded', 'true');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      } else {
        mobileDrawer.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }

    if (navToggle) {
      navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
      });
    }

    // Close mobile menu on link click or outside click
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            toggleMobileMenu(true);
            targetEl.scrollIntoView({ behavior: 'smooth' });
            // update history
            window.history.pushState(null, '', targetId);
          }
        }
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        toggleMobileMenu(true);
      }
    });

    // Close mobile drawer when resizing beyond tablet breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && mobileDrawer.classList.contains('is-open')) {
        toggleMobileMenu(true);
      }
    });
  }

  // Export / Bootstrap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();
