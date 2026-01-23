import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  open(event) {
    const id = event.currentTarget.dataset.modalId;
    const modal = document.getElementById(id);

    if (!modal) return;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.element.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}
