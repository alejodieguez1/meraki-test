/* Product Item */
class ProductItem extends HTMLElement {
  connectedCallback() {
    this.setupListeners();
    this.body = document.querySelector("body");
  }

  setupListeners() {
    this.addEventListener("click", (e) => {
      const buttonOpen = e.target.closest("[data-button='quickview']");
      const buttonClose = e.target.closest("[data-modal='close']");
      const modal = this.querySelector("[data-modal]");

      if (buttonOpen) {
        this.handleModalOpen(modal);
      }

      if (buttonClose) {
        this.handleModalClose(modal);
      }
    });
  }

  handleModalOpen(modal) {
    modal.classList.add("active");
    this.body.classList.add("overflow-hidden");
  }

  handleModalClose(modal) {
    modal.classList.remove("active");
    this.body.classList.remove("overflow-hidden");
  }
}

customElements.define("product-item", ProductItem);
