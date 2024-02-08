import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-purchase-completed',
  templateUrl: './purchase-completed.component.html',
  styleUrls: ['./purchase-completed.component.scss'],
})
export class PurchaseCompletedComponent {
  @Output() closeEvent = new EventEmitter();

  closeModal(event: MouseEvent) {
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      (target.id === 'modal-area' || target.id === 'close-button')
    ) {
      this.closeEvent.emit();
    }
  }
}
