/**
 * InnovateX 2026 — Real-time Countdown Timer Module
 */

(function () {
  'use strict';

  // Configurable Target Date: October 24, 2026, 09:00:00 IST (Indian Standard Time UTC+05:30)
  const TARGET_DATE_STRING = '2026-10-24T09:00:00+05:30';

  let countdownInterval = null;

  function initCountdown() {
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');
    const timerGrid = document.getElementById('countdown-timer');
    const expiredMsg = document.getElementById('countdown-expired-msg');
    const targetLabel = document.getElementById('countdown-target-label');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
      return;
    }

    const targetTimestamp = new Date(TARGET_DATE_STRING).getTime();

    if (isNaN(targetTimestamp)) {
      console.error('Invalid countdown target timestamp.');
      return;
    }

    function formatNumber(num) {
      return num < 10 ? `0${num}` : `${num}`;
    }

    function updateCountdown() {
      const now = new Date().getTime();
      const difference = targetTimestamp - now;

      if (difference <= 0) {
        // Expired State
        clearInterval(countdownInterval);
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';

        if (timerGrid) timerGrid.style.display = 'none';
        if (expiredMsg) expiredMsg.style.display = 'flex';
        if (targetLabel) targetLabel.textContent = 'Event is currently in progress!';
        return;
      }

      // Time calculations
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Render values safely
      daysEl.textContent = formatNumber(Math.max(0, days));
      hoursEl.textContent = formatNumber(Math.max(0, hours));
      minutesEl.textContent = formatNumber(Math.max(0, minutes));
      secondsEl.textContent = formatNumber(Math.max(0, seconds));
    }

    // Initial immediate invocation
    updateCountdown();

    // Start 1-second interval
    countdownInterval = setInterval(updateCountdown, 1000);
  }

  // Lifecycle
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountdown);
  } else {
    initCountdown();
  }
})();
