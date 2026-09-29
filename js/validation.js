/**
 * InnovateX 2026 — Client-side Registration Form Validation
 */

(function () {
  'use strict';

  function initValidation() {
    const form = document.getElementById('registration-form');
    if (!form) return;

    const fields = {
      name: {
        input: document.getElementById('reg-name'),
        error: document.getElementById('error-name'),
        group: document.getElementById('group-name'),
        validate: (val) => {
          const clean = val.trim();
          if (!clean) return 'Full Name is required.';
          if (clean.length < 3) return 'Name must be at least 3 characters.';
          if (!/^[a-zA-Z\s.'-]+$/.test(clean)) return 'Name contains invalid characters.';
          return '';
        },
      },
      email: {
        input: document.getElementById('reg-email'),
        error: document.getElementById('error-email'),
        group: document.getElementById('group-email'),
        validate: (val) => {
          const clean = val.trim();
          if (!clean) return 'Email address is required.';
          // RFC-compliant email regex
          const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
          if (!emailPattern.test(clean)) return 'Please enter a valid email address (e.g. name@college.edu).';
          return '';
        },
      },
      phone: {
        input: document.getElementById('reg-phone'),
        error: document.getElementById('error-phone'),
        group: document.getElementById('group-phone'),
        validate: (val) => {
          const clean = val.trim().replace(/\D/g, '');
          if (!clean) return 'Phone number is required.';
          if (clean.length !== 10) return 'Enter exactly 10 digits for Indian mobile numbers.';
          if (!/^[6-9]/.test(clean)) return 'Indian mobile numbers start with 6, 7, 8, or 9.';
          return '';
        },
      },
      college: {
        input: document.getElementById('reg-college'),
        error: document.getElementById('error-college'),
        group: document.getElementById('group-college'),
        validate: (val) => {
          const clean = val.trim();
          if (!clean) return 'College / University name is required.';
          if (clean.length < 3) return 'Please specify full college or institute name.';
          return '';
        },
      },
      year: {
        input: document.getElementById('reg-year'),
        error: document.getElementById('error-year'),
        group: document.getElementById('group-year'),
        validate: (val) => {
          if (!val) return 'Please select your current year of study.';
          return '';
        },
      },
      event: {
        input: document.getElementById('reg-event'),
        error: document.getElementById('error-event'),
        group: document.getElementById('group-event'),
        validate: (val) => {
          if (!val) return 'Please choose a flagship event track.';
          return '';
        },
      },
    };

    // Real-time / Blur field validation
    Object.keys(fields).forEach((key) => {
      const field = fields[key];
      if (!field.input) return;

      field.input.addEventListener('blur', () => {
        validateSingleField(field);
      });

      field.input.addEventListener('input', () => {
        if (field.input.classList.contains('is-invalid')) {
          validateSingleField(field);
        }
      });
    });

    function validateSingleField(field) {
      const errorMsg = field.validate(field.input.value);
      if (errorMsg) {
        field.input.classList.add('is-invalid');
        field.input.classList.remove('is-valid');
        field.error.textContent = errorMsg;
        return false;
      } else {
        field.input.classList.remove('is-invalid');
        field.input.classList.add('is-valid');
        field.error.textContent = '';
        return true;
      }
    }

    // Submit handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasErrors = false;
      let firstInvalidInput = null;

      Object.keys(fields).forEach((key) => {
        const field = fields[key];
        const isValid = validateSingleField(field);
        if (!isValid) {
          hasErrors = true;
          if (!firstInvalidInput) {
            firstInvalidInput = field.input;
          }
        }
      });

      if (hasErrors) {
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        return;
      }

      // Valid form submission
      handleSuccessfulSubmission();
    });

    function handleSuccessfulSubmission() {
      const formData = {
        name: fields.name.input.value.trim(),
        email: fields.email.input.value.trim(),
        phone: '+91 ' + fields.phone.input.value.trim(),
        college: fields.college.input.value.trim(),
        year: fields.year.input.value,
        event: fields.event.input.value,
        message: document.getElementById('reg-message')?.value.trim() || 'N/A',
        regId: 'IX26-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        timestamp: new Date().toLocaleString(),
      };

      // Show details in success modal
      const successModal = document.getElementById('success-modal-backdrop');
      const detailsBox = document.getElementById('success-details-box');
      const summaryText = document.getElementById('success-summary-text');
      const closeBtn = document.getElementById('btn-success-close');

      if (summaryText) {
        summaryText.textContent = `Welcome aboard, ${formData.name}! Your delegate registration for ${formData.event} is confirmed.`;
      }

      if (detailsBox) {
        detailsBox.innerHTML = `
          <div class="success-detail-row">
            <span>Delegate Reg ID:</span>
            <strong>${formData.regId}</strong>
          </div>
          <div class="success-detail-row">
            <span>Confirmed Track:</span>
            <strong style="color: var(--accent-cyan);">${formData.event}</strong>
          </div>
          <div class="success-detail-row">
            <span>Institution:</span>
            <strong>${formData.college} (${formData.year})</strong>
          </div>
          <div class="success-detail-row">
            <span>Contact Email:</span>
            <strong>${formData.email}</strong>
          </div>
        `;
      }

      if (successModal) {
        successModal.classList.add('is-open');
        successModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      // Reset form & classes
      form.reset();
      Object.keys(fields).forEach((key) => {
        fields[key].input.classList.remove('is-valid');
      });

      if (closeBtn) {
        closeBtn.onclick = () => {
          successModal.classList.remove('is-open');
          successModal.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        };
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initValidation);
  } else {
    initValidation();
  }
})();
