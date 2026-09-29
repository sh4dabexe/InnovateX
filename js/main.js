/**
 * InnovateX 2026 — Main Application Lifecycle & Scroll Animations
 */

(function () {
  'use strict';

  function initApp() {
    initScrollReveal();
    initCounterAnimations();
    initScheduleFilter();
  }

  // Interactive schedule day tabs
  function initScheduleFilter() {
    const tabs = document.querySelectorAll('.schedule-tab');
    const items = document.querySelectorAll('.timeline-item');

    if (!tabs.length || !items.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const selectedDay = tab.getAttribute('data-day');

        items.forEach((item) => {
          const itemDay = item.getAttribute('data-day');
          if (selectedDay === 'all' || itemDay === selectedDay) {
            item.style.display = '';
            item.classList.add('is-visible');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // IntersectionObserver for staggered fade-up effects
  function initScrollReveal() {
    const revealTargets = document.querySelectorAll(
      '.about-editorial, .about-visual-column, .stat-card, .event-card, .timeline-item, .gallery-item, .register-info, .register-form-card, .ai-card'
    );

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealTargets.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  }

  // Animate statistics counter numbers subtly on view
  function initCounterAnimations() {
    const statCards = document.querySelectorAll('.stat-card');

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('counted');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statCards.forEach((card) => observer.observe(card));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
