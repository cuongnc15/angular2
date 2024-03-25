import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, RouterOutlet } from '@angular/router';

interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-status',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  statuses: Status[] = [
    { value: 'actice', viewValue: 'Hoạt động' },
    { value: 'inActive', viewValue: 'Không hoạt động' },
  ];
}
