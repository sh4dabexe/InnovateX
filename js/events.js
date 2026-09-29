/**
 * InnovateX 2026 — Event Cards Data & Details Modal
 */

(function () {
  'use strict';

  // Master Events Dataset
  const EVENTS_DATA = [
    {
      id: 'hackforge',
      title: 'HackForge',
      category: 'Hackathon',
      badgeClass: 'badge-cyan',
      image: 'assets/images/event-hackforge.jpg',
      shortDesc: 'A 24-hour sprint to build transformative software and hardware prototypes under real-world pressure.',
      fullDesc: 'HackForge challenges developers, designers, and domain specialists to conceptualize and ship a fully functioning minimum viable product within 24 hours. Participants receive access to modern API toolkits, cloud credits, hardware sensors, and dedicated industry mentors. Judged on architectural elegance, execution polish, and innovation quotient.',
      prize: '₹50,000',
      duration: '24 Hours',
      teamSize: '2–4 Members',
      eligibility: 'All college undergraduates & postgraduates',
      venue: 'Nexus Main Lab Pod A',
    },
    {
      id: 'roborumble',
      title: 'RoboRumble',
      category: 'Robotics',
      badgeClass: 'badge-pink',
      image: 'assets/images/event-roborumble.jpg',
      shortDesc: 'Combat bots and custom-engineered machines compete in a steel-reinforced tactical arena.',
      fullDesc: 'Step into the combat circle! RoboRumble tests mechanical robustness, electrical telemetry, and pilot reflex. Engineering teams field custom 15kg/30kg combat robots across round-robin knockout bouts. Hazard traps, kinetic wedges, and pneumatic flippers will decide who rules the arena.',
      prize: '₹40,000',
      duration: '2 Days (Heats & Finals)',
      teamSize: '3–5 Members',
      eligibility: 'Engineering collegiate teams',
      venue: 'InnovateX Colosseum Arena',
    },
    {
      id: 'code-clash',
      title: 'Code Clash',
      category: 'Competitive Programming',
      badgeClass: 'badge-cyan',
      image: 'assets/images/event-code-clash.jpg',
      shortDesc: 'Solve intricate algorithmic puzzles, dynamic graphs, and optimization problems against the clock.',
      fullDesc: 'An intense, individual and duo speed-coding duel modeled after global algorithmic finals. Compete across three progressively brutal rounds covering computational geometry, dynamic programming, number theory, and string invariants. Fastest valid test-suite submissions climb the live scoreboard.',
      prize: '₹25,000',
      duration: '3.5 Hours',
      teamSize: '1–2 Members',
      eligibility: 'Open to all students',
      venue: 'Computer Center Tower B',
    },
    {
      id: 'designx',
      title: 'DesignX',
      category: 'UI/UX Design',
      badgeClass: 'badge-purple',
      image: 'assets/images/event-designx.jpg',
      shortDesc: 'Craft intuitive digital product experiences, design systems, and micro-interactions from complex briefs.',
      fullDesc: 'DesignX evaluates human-centered thinking, interface aesthetics, typography hierarchy, and interaction flow. Participants receive an ambiguous user problem statement and have 6 hours to research, wireframe, and assemble an interactive, high-fidelity clickable prototype.',
      prize: '₹20,000',
      duration: '6 Hours',
      teamSize: '1–2 Members',
      eligibility: 'Design & engineering students',
      venue: 'Creative Studio 4',
    },
    {
      id: 'startup-arena',
      title: 'Startup Arena',
      category: 'Entrepreneurship',
      badgeClass: 'badge-blue',
      image: 'assets/images/event-startup-arena.jpg',
      shortDesc: 'Pitch disruptive business models and technical products live before a seasoned investor panel.',
      fullDesc: 'The premier collegiate venture showdown. Early-stage student founders pitch their startup concept, traction, market validation, and go-to-market model. Finalists receive direct investor feedback, term-sheet exploration sessions, and incubation credits from festival venture partners.',
      prize: '₹30,000',
      duration: '4 Hours',
      teamSize: '1–4 Founders',
      eligibility: 'Student venture teams',
      venue: 'Main Auditorium Stage',
    },
  ];

  let lastFocusedElement = null;

  function initEvents() {
    const gridEl = document.getElementById('events-grid');
    const modalBackdrop = document.getElementById('event-modal-backdrop');
    const modalBody = document.getElementById('modal-body-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (!gridEl) return;

    // Render Event Cards dynamically
    gridEl.innerHTML = EVENTS_DATA.map((event) => {
      return `
        <article class="event-card" id="card-${event.id}" data-event-id="${event.id}">
          <div class="event-img-wrap">
            <img src="${event.image}" alt="${event.title} - ${event.category}" class="event-card-img" loading="lazy">
            <span class="event-category-badge">${event.category}</span>
          </div>
          <div class="event-body">
            <h3 class="event-title">${event.title}</h3>
            <p class="event-short-desc">${event.shortDesc}</p>
            <div class="event-meta-row">
              <div class="meta-col">
                <span class="meta-sub">Prize Pool</span>
                <span class="meta-value">${event.prize}</span>
              </div>
              <div class="meta-col">
                <span class="meta-sub">Duration</span>
                <span class="meta-value">${event.duration}</span>
              </div>
            </div>
            <div class="event-actions-row">
              <button type="button" class="btn btn-secondary btn-event-details" data-event-id="${event.id}" aria-haspopup="dialog">
                <span>View Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
              <button type="button" class="btn btn-primary btn-event-quick-reg" data-quick-event="${event.title}">
                <span>Register</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Event Details Modal Handlers
    gridEl.addEventListener('click', (e) => {
      const detailsBtn = e.target.closest('.btn-event-details');
      if (detailsBtn) {
        const eventId = detailsBtn.getAttribute('data-event-id');
        openEventModal(eventId, detailsBtn);
        return;
      }

      const quickRegBtn = e.target.closest('.btn-event-quick-reg');
      if (quickRegBtn) {
        const eventTitle = quickRegBtn.getAttribute('data-quick-event');
        selectEventAndScroll(eventTitle);
      }
    });

    // Handle Quick Reg from footer links
    document.querySelectorAll('[data-event-select]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const eventTitle = link.getAttribute('data-event-select');
        selectEventAndScroll(eventTitle);
      });
    });

    function selectEventAndScroll(eventTitle) {
      const regSelect = document.getElementById('reg-event');
      const regSection = document.getElementById('register');
      if (regSelect) {
        regSelect.value = eventTitle;
        // Trigger validation reset on select
        regSelect.classList.remove('is-invalid');
        const errEl = document.getElementById('error-event');
        if (errEl) errEl.textContent = '';
      }
      if (regSection) {
        regSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function openEventModal(eventId, triggerEl) {
      const event = EVENTS_DATA.find((item) => item.id === eventId);
      if (!event) return;

      lastFocusedElement = triggerEl || document.activeElement;

      modalBody.innerHTML = `
        <div class="modal-header-badge">
          <span class="badge ${event.badgeClass}">${event.category}</span>
        </div>
        <h2 class="modal-title">${event.title}</h2>
        <div class="modal-img-wrapper">
          <img src="${event.image}" alt="${event.title}" loading="lazy">
        </div>
        <div class="modal-meta-grid">
          <div class="modal-meta-item">
            <span class="meta-label">Prize</span>
            <div class="meta-val">${event.prize}</div>
          </div>
          <div class="modal-meta-item">
            <span class="meta-label">Duration</span>
            <div class="meta-val">${event.duration}</div>
          </div>
          <div class="modal-meta-item">
            <span class="meta-label">Team Size</span>
            <div class="meta-val">${event.teamSize}</div>
          </div>
          <div class="modal-meta-item">
            <span class="meta-label">Venue</span>
            <div class="meta-val" style="font-size:0.95rem;">${event.venue}</div>
          </div>
        </div>
        <p class="modal-desc">${event.fullDesc}</p>
        <div class="modal-actions">
          <button type="button" class="btn btn-primary" id="btn-modal-reg" data-reg-event="${event.title}">
            Register for ${event.title}
          </button>
          <button type="button" class="btn btn-ghost" id="btn-modal-cancel">
            Close
          </button>
        </div>
      `;

      modalBackdrop.classList.add('is-open');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Attach register inside modal
      const modalRegBtn = document.getElementById('btn-modal-reg');
      if (modalRegBtn) {
        modalRegBtn.addEventListener('click', () => {
          closeEventModal();
          selectEventAndScroll(event.title);
        });
      }

      const modalCancelBtn = document.getElementById('btn-modal-cancel');
      if (modalCancelBtn) {
        modalCancelBtn.addEventListener('click', closeEventModal);
      }

      if (modalCloseBtn) {
        modalCloseBtn.focus();
      }
    }

    function closeEventModal() {
      if (!modalBackdrop.classList.contains('is-open')) return;
      modalBackdrop.classList.remove('is-open');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeEventModal);
    }

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeEventModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
        closeEventModal();
      }
    });
  }

  // Export dataset for TypeSafe Matchmaker
  window.INNOVATEX_EVENTS = EVENTS_DATA;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEvents);
  } else {
    initEvents();
  }
})();
