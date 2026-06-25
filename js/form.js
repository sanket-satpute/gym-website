/* ============================================
   IRON FORGE FITNESS — Form Handling
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('assessment-form');
  const formSuccess = document.getElementById('form-success');

  if (!form) return;

  const nameInput = form.querySelector('#name');
  const phoneInput = form.querySelector('#phone');
  const goalSelect = form.querySelector('#goal');

  // Validation helpers
  const validateName = (value) => value.trim().length >= 2;
  const validatePhone = (value) => /[\d]{10,}/.test(value.replace(/[\s\-\+\(\)]/g, ''));
  const validateGoal = (value) => value !== '' && value !== null;

  const setError = (input) => {
    input.classList.add('error');
  };

  const clearError = (input) => {
    input.classList.remove('error');
  };

  // Clear error on input
  [nameInput, phoneInput, goalSelect].forEach(input => {
    if (input) {
      const event = input.tagName === 'SELECT' ? 'change' : 'input';
      input.addEventListener(event, () => clearError(input));
    }
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate name
    if (!validateName(nameInput.value)) {
      setError(nameInput);
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate phone
    if (!validatePhone(phoneInput.value)) {
      setError(phoneInput);
      isValid = false;
    } else {
      clearError(phoneInput);
    }

    // Validate goal
    if (!validateGoal(goalSelect.value)) {
      setError(goalSelect);
      isValid = false;
    } else {
      clearError(goalSelect);
    }

    if (isValid) {
      // Hide form, show success message
      form.style.display = 'none';
      formSuccess.classList.add('active');

      // Reset form data
      form.reset();
    }
  });
});
