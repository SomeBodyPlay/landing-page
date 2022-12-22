(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
