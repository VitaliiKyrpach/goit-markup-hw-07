(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    label: document.querySelector('[data-label]'),
    checkbox: document.querySelector('#policy'),
    replace: document.querySelector('#checked')
  };

  console.log(refs.checkbox.checked)

  refs.label.addEventListener('click', toggleChecked)
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("pointer-events-none");
    refs.modal.classList.toggle("invisible");
    refs.modal.classList.toggle("opacity-0");
    refs.modal.classList.toggle("opacity-100");
    document.body.classList.toggle("overflow-hidden");
  }

  function toggleChecked(){
    refs.replace.classList.toggle('fill-transparent');
    refs.replace.classList.toggle('fill-backSection');
    refs.replace.classList.toggle('bg-colorAct')
  }
})();
