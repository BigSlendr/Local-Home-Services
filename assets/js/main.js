(() => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const handleHeaderScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  handleHeaderScroll();
  window.addEventListener('scroll', handleHeaderScroll);

  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;
      item.classList.toggle('open');
    });
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter || 'all';

        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach((card) => {
          const category = card.dataset.category || '';
          const show = filter === 'all' || category === filter;
          card.classList.toggle('hidden', !show);
        });
      });
    });
  }

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const modalImage = document.getElementById('modal-image');
  const closeModalButton = document.querySelector('[data-close-modal]');

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  if (modal) {
    document.querySelectorAll('.project-open').forEach((button) => {
      button.addEventListener('click', () => {
        if (modalTitle) modalTitle.textContent = button.dataset.title || 'Project Details';
        if (modalText) modalText.textContent = button.dataset.description || '';
        if (modalImage && button.dataset.image) {
          modalImage.src = button.dataset.image;
          modalImage.alt = button.dataset.title || 'Project image';
        }
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
      });
    });

    if (closeModalButton) closeModalButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });
  }

  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    const successMessage = document.getElementById('form-success');
    const requiredFields = ['name', 'phone', 'zip'];

    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      let valid = true;

      requiredFields.forEach((fieldName) => {
        const field = quoteForm.querySelector(`[name="${fieldName}"]`);
        const error = quoteForm.querySelector(`[data-error-for="${fieldName}"]`);
        if (!field) return;

        const value = field.value.trim();
        let message = '';

        if (!value) {
          message = 'This field is required.';
          valid = false;
        } else if (fieldName === 'phone' && !/^[0-9()+\-\s]{7,}$/.test(value)) {
          message = 'Please enter a valid phone number.';
          valid = false;
        } else if (fieldName === 'zip' && !/^\d{5}(?:-\d{4})?$/.test(value)) {
          message = 'Please enter a valid ZIP code.';
          valid = false;
        }

        if (error) error.textContent = message;
      });

      if (valid) {
        quoteForm.reset();
        if (successMessage) {
          successMessage.textContent = "We'll contact you within one business day.";
        }
      }
    });
  }
})();
