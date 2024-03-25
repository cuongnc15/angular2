import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventEmitter } from '@angular/core';
import { StatusComponent } from '../../../core/component/status/status.component';
import { RoleService } from '../../../core/services/role.service';
import { Role } from '../../../core/type/role';
import { NzMessageService } from 'ng-zorro-antd/message';

interface Tittle {
  value: string;
  viewValue: string;
}

interface Agency {
  value: string;
  viewValue: string;
}

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-role-add',
  standalone: true,
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    StatusComponent,
    ReactiveFormsModule,
  ],
})
export class RoleAddComponent {
  @Output() closeEvent = new EventEmitter<void>();
  @Output() getEvent = new EventEmitter<void>();

  constructor(
    private RoleService: RoleService,
    private message: NzMessageService
  ) {}

  closeModal(): void {
    this.closeEvent.emit();
  }

  tittles: Tittle[] = [
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'Sale', viewValue: 'Sale' },
    { value: 'Marketing', viewValue: 'Marketing' },
    { value: 'Giám đốc', viewValue: 'Giám đốc' },
    { value: 'Kế toán', viewValue: 'Kế toán' },
  ];

  agencyes: Agency[] = [
    { value: 'tanVietBook', viewValue: 'Tân việt book' },
    { value: 'eztek', viewValue: 'Eztek' },
    { value: 'mathPro', viewValue: 'MathPro' },
  ];

  statuses: Status[] = [
    { value: 'actice', viewValue: 'Hoạt động' },
    { value: 'inactive', viewValue: 'Không hoạt động' },
  ];

  applyForm = new FormGroup({
    username: new FormControl(''),
    fullName: new FormControl(''),
  });

  role: any;
  selectedAgency(selectedValue: string): void {
    this.selectedAgencyName = selectedValue;
  }
  selectedRole(selectedValue: string): void {
    this.selectedRoleName = selectedValue;
  }
  selectedAgencyName: string = '';
  selectedRoleName: string = '';

  today = new Date();
  date =
    this.today.getDate() +
    '/' +
    (this.today.getMonth() + 1) +
    '/' +
    this.today.getFullYear();

  addRole2(): void {
    this.role = {
      userName: this.applyForm.value.username,
      fullName: this.applyForm.value.fullName,
      agency: this.selectedAgencyName,
      role: this.selectedRoleName,
      effectiveDate: this.date,
      status: true,
    };
    this.addRole(this.role);
    this.closeEvent.emit();
    this.getEvent.emit();
  }

  data: any[] = [];

  addRole(role: object): void {
    if (!role) {
      return;
    }
    this.RoleService.addRole(role as Role).subscribe(
      () => {
        // Cập nhật thành công
        this.message.success('Dữ liệu đã được cập nhật thành công!');
      },
      (error) => {
        // Xử lý lỗi nếu có
        console.error('Có lỗi xảy ra khi cập nhật dữ liệu:', error);
        this.message.error(
          'Có lỗi xảy ra khi cập nhật dữ liệu. Vui lòng thử lại.'
        );
      }
    );
  }
}
