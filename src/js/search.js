(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-search-open]'),
    menuModalBtn: document.querySelector('[data-search-menu]'),
    closeModalBtn: document.querySelector('[data-search-close]'),
    modal: document.querySelector('[data-search]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.menuModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
