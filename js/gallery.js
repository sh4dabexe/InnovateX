/**
 * InnovateX 2026 — Dynamic Gallery Grid & Lightbox
 */

(function () {
  'use strict';

  const GALLERY_ITEMS = [
    {
      id: 'gallery-1',
      title: 'Grand Opening Ceremony',
      subtitle: 'Nexus Main Auditorium Keynote',
      image: 'assets/images/gallery-opening.jpg',
      aspect: 'featured',
    },
    {
      id: 'gallery-2',
      title: 'Robotics Combat Arena',
      subtitle: 'High-Voltage Pilot Telemetry',
      image: 'assets/images/gallery-robotics.jpg',
      aspect: 'medium',
    },
    {
      id: 'gallery-3',
      title: 'System One Workshop',
      subtitle: 'Hands-on AI Decision Prototyping',
      image: 'assets/images/gallery-workshop.jpg',
      aspect: 'medium',
    },
    {
      id: 'gallery-4',
      title: 'HackForge 24h Sprint',
      subtitle: 'Late-Night Hardware & API Hack',
      image: 'assets/images/event-hackforge.jpg',
      aspect: 'wide',
    },
    {
      id: 'gallery-5',
      title: 'Algorithmic Duel',
      subtitle: 'Code Clash Timed Scoreboard',
      image: 'assets/images/event-code-clash.jpg',
      aspect: 'square',
    },
    {
      id: 'gallery-6',
      title: 'DesignX UI/UX Sprint',
      subtitle: 'Design System & Heuristics',
      image: 'assets/images/event-designx.jpg',
      aspect: 'square',
    },
    {
      id: 'gallery-7',
      title: 'Startup Arena Pitch',
      subtitle: 'Venture Founders Before Angel Syndicates',
      image: 'assets/images/gallery-pitch.jpg',
      aspect: 'square',
    },
    {
      id: 'gallery-8',
      title: 'Innovation Collaboration',
      subtitle: 'Collegiate Builders Crossing Paths',
      image: 'assets/images/about-innovation.jpg',
      aspect: 'wide',
    },
    {
      id: 'gallery-9',
      title: 'Prize & Trophy Ceremony',
      subtitle: 'Celebrating ₹2L+ Winners',
      image: 'assets/images/gallery-prize.jpg',
      aspect: 'wide',
    },
  ];

  let currentPhotoIndex = 0;
  let lastFocusedTrigger = null;

  function initGallery() {
    const gridEl = document.getElementById('gallery-grid');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (!gridEl || !lightboxBackdrop) return;

    // Render gallery items
    gridEl.innerHTML = GALLERY_ITEMS.map((item, index) => {
      return `
        <figure class="gallery-item" tabindex="0" role="button" aria-label="View photo: ${item.title}" data-index="${index}">
          <img src="${item.image}" alt="${item.title} - ${item.subtitle}" class="gallery-thumb" loading="lazy">
          <figcaption class="gallery-overlay">
            <span class="gallery-item-title">${item.title}</span>
            <span class="gallery-item-sub">${item.subtitle}</span>
          </figcaption>
        </figure>
      `;
    }).join('');

    function openLightbox(index, triggerEl) {
      currentPhotoIndex = index;
      lastFocusedTrigger = triggerEl || document.activeElement;
      updateLightboxContent();

      lightboxBackdrop.classList.add('is-open');
      lightboxBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
      if (!lightboxBackdrop.classList.contains('is-open')) return;
      lightboxBackdrop.classList.remove('is-open');
      lightboxBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocusedTrigger) {
        lastFocusedTrigger.focus();
      }
    }

    function updateLightboxContent() {
      const item = GALLERY_ITEMS[currentPhotoIndex];
      if (!item) return;

      lightboxImg.src = item.image;
      lightboxImg.alt = `${item.title} - ${item.subtitle}`;
      lightboxCaption.innerHTML = `
        <strong>${item.title}</strong> — <span style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.875rem;">${item.subtitle}</span>
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Photo ${currentPhotoIndex + 1} of ${GALLERY_ITEMS.length}</div>
      `;
    }

    function showNext() {
      currentPhotoIndex = (currentPhotoIndex + 1) % GALLERY_ITEMS.length;
      updateLightboxContent();
    }

    function showPrev() {
      currentPhotoIndex = (currentPhotoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      updateLightboxContent();
    }

    // Grid item click and enter/space key
    gridEl.addEventListener('click', (e) => {
      const itemEl = e.target.closest('.gallery-item');
      if (itemEl) {
        const index = parseInt(itemEl.getAttribute('data-index'), 10);
        openLightbox(index, itemEl);
      }
    });

    gridEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const itemEl = e.target.closest('.gallery-item');
        if (itemEl) {
          e.preventDefault();
          const index = parseInt(itemEl.getAttribute('data-index'), 10);
          openLightbox(index, itemEl);
        }
      }
    });

    // Lightbox navigation events
    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    lightboxBackdrop.addEventListener('click', (e) => {
      if (e.target === lightboxBackdrop) {
        closeLightbox();
      }
    });

    // Keyboard controls (Escape, Left, Right)
    window.addEventListener('keydown', (e) => {
      if (!lightboxBackdrop.classList.contains('is-open')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
