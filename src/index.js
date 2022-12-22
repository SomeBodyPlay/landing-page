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

(() => {
  function maskCardCode(event) {
    let vcc = this.value.replace(/\D/g, '');
    this.value = '';
    for (let i = 0; i < vcc.length; i++) {
      this.value += (i % 4 == 0 && i != 0 ? ' ' : '') + vcc[i];
    }
  }
  document
    .getElementById('cardCode')
    .addEventListener('input', maskCardCode, false);
})();

(() => {
  function maskCC(event) {
    let vcc = this.value.replace(/\D/g, '');
    this.value = '';
    for (let i = 0; i < vcc.length; i++) {
      this.value += (i % 2 == 0 && i != 0 ? ' / ' : '') + vcc[i];
    }
  }
  document.getElementById('startDate').addEventListener('input', maskCC, false);
})();
