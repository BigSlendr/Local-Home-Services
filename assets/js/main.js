(function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-q');
    if (!question) return;
    question.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      question.setAttribute('aria-expanded', String(open));
    });
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');
  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach((card) => {
          const match = filter === 'all' || card.dataset.category === filter;
          card.style.display = match ? 'block' : 'none';
        });
      });
    });
  }

  const modal = document.querySelector('[data-modal]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalBody = document.querySelector('[data-modal-body]');
  const modalClose = document.querySelector('[data-modal-close]');

  function closeModal() {
    if (modal) modal.classList.remove('open');
  }

  if (modal) {
    document.querySelectorAll('[data-project]').forEach((card) => {
      card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title || 'Project Detail';
        modalBody.textContent =
          card.dataset.description ||
          'This project showcases premium craftsmanship, clear communication, and clean execution from estimate to final walk-through.';
        modal.classList.add('open');
      });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });
  }

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const requiredFields = [
        { id: 'name', message: 'Please enter your name.' },
        { id: 'phone', message: 'Please enter your phone number.' },
        { id: 'zip', message: 'Please enter your ZIP code.' }
      ];

      let valid = true;

      requiredFields.forEach((field) => {
        const input = document.getElementById(field.id);
        const error = form.querySelector(`[data-error-for="${field.id}"]`);
        if (!input || !error) return;

        if (!input.value.trim()) {
          error.textContent = field.message;
          error.style.display = 'block';
          valid = false;
        } else {
          error.style.display = 'none';
        }
      });

      const phoneInput = document.getElementById('phone');
      const phoneError = form.querySelector('[data-error-for="phone"]');
      if (phoneInput && phoneInput.value.trim()) {
        const digits = phoneInput.value.replace(/\D/g, '');
        if (digits.length < 10) {
          phoneError.textContent = 'Please enter a valid phone number.';
          phoneError.style.display = 'block';
          valid = false;
        }
      }

      if (!valid) return;

      form.reset();
      const successBox = document.querySelector('[data-form-success]');
      if (successBox) {
        successBox.style.display = 'block';
        successBox.textContent = 'Thanks! We’ll reach out within 1 business day.';
      }
    });
  }
})();
