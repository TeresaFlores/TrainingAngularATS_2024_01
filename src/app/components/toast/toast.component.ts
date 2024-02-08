import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent implements OnDestroy {
  open = false;
  message = '';
  private subscriptionMessage: Subscription;

  constructor(private toastService: ToastService) {
    this.subscriptionMessage = this.toastService.message$.subscribe(
      (content) => {
        this.message = content;
      }
    );
    this.subscriptionMessage = this.toastService.open$.subscribe((open) => {
      this.open = open;
    });
  }

  clearMessage() {
    this.toastService.clearMessage();
  }

  ngOnDestroy(): void {
    this.subscriptionMessage.unsubscribe();
  }
}
