import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { ButtonSearchComponent } from '../../../../core/component/button-search/button-search.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ButtonSearchComponent,
    NzIconModule,
  ],
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() deleteConfirm = new EventEmitter<any>();
  @Input() dataFromParent = '';

  closeModal(): void {
    this.closeEvent.emit();
  }

  delete(): void {
    this.deleteConfirm.emit();
  }
}
