(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-modal]"),
  };
  refs.openModalBtns.forEach(item => {
    item.addEventListener("click", toggleModal);
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", logBackdropClick);
  function toggleModal() {    document.body.classList.toggle("modal-open");
    refs.backdrop.classList.toggle("is-hidden");
  }
  function logBackdropClick() {
    console.log("Это клик в бекдроп");
  };
  })(); 