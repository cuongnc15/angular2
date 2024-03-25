import { CommonModule } from '@angular/common';
import { Component, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventEmitter } from '@angular/core';
import { RoleService } from '../../../core/services/role.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Role } from '../../../core/type/role';

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
  selector: 'app-role-edit',
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
    ReactiveFormsModule,
  ],
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss'],
})
export class RoleDetailComponent {
  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() getEvent = new EventEmitter<void>();
  @Input() data: any = {};

  constructor(
    private RoleService: RoleService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) {}

  route: ActivatedRoute = inject(ActivatedRoute);
  serviceId = this.route.snapshot.params['id'];

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
    { value: 'Eztek', viewValue: 'Eztek' },
    { value: 'mathPro', viewValue: 'MathPro' },
  ];

  statuses: Status[] = [
    { value: 'actice', viewValue: 'Hoạt động' },
    { value: 'inactive', viewValue: 'Không hoạt động' },
  ];

  applyForm!: FormGroup;

  ngOnInit() {
    this.applyForm = this.fb.group({
      userNameInput: [this.data?.userName || ''],
      fullName: [this.data?.fullName || ''],
      agency: [this.data?.agency || ''],
      role: [this.data?.role || ''],
    });
  }

  selectedAgency(selectedValue: string): void {
    this.selectedAgencyName = selectedValue;
  }
  selectedRole(selectedValue: string): void {
    this.selectedRoleName = selectedValue;
  }
  selectedAgencyName: string = this.data.agency;
  selectedRoleName: string = this.data.role;

  updateValue: any = {};
  updateForm(): void {
    this.updateValue = {
      userName: this.applyForm.value.userNameInput,
      fullName: this.applyForm.value.fullName,
      agency: this.selectedAgencyName
        ? this.selectedAgencyName
        : this.data.agency,
      role: this.selectedRoleName ? this.selectedRoleName : this.data.role,
      status: true,
    };
    this.update(this.updateValue);
    this.closeEvent.emit();
    this.getEvent.emit();
  }

  update(updateValue: any): void {
    if (!updateValue) {
      return;
    }
    this.RoleService.updateRole(updateValue as Role, this.data.id).subscribe();
  }
}
