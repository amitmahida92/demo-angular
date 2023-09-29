import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }
}
