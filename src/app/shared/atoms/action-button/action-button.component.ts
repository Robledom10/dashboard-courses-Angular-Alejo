import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() text: string = '';
  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.action.emit()
  }
}
