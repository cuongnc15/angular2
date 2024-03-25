import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoleAddComponent } from '../role-add/role-add.component';
import { StatusComponent } from '../../../core/component/status/status.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ButtonSearchComponent } from '../../../core/component/button-search/button-search.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { RoleService } from '../../../core/services/role.service';
import { RoleDetailComponent } from '../role-edit/role-edit.component';

interface Tittle {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-role',
  standalone: true,
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    RoleAddComponent,
    StatusComponent,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ButtonSearchComponent,
    NzIconModule,
    NgxPaginationModule,
    RoleDetailComponent,
    ReactiveFormsModule,
  ],
})
export class RoleListComponent {
  pageSize: number = 10;
  page: number = 1;
  total: any;

  modal: boolean = false;
  addModal(): void {
    this.modal = true;
  }
  closeModal(): void {
    this.modal = false;
  }

  modalDetail: boolean = false;

  addModalDetail(rowIndex: number): void {
    this.modalDetail = true;
    this.dataFromParent = this.roles[rowIndex];
  }

  closeModalDetail(): void {
    this.modalDetail = false;
  }

  dataFromParent: any = {};

  tittles: Tittle[] = [
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'Sale', viewValue: 'Sale' },
    { value: 'Marketing', viewValue: 'Marketing' },
    { value: 'Giám đốc', viewValue: 'Giám đốc' },
    { value: 'Kế toán', viewValue: 'Kế toán' },
  ];

  constructor(private RoleService: RoleService) {}
  roles: any;

  getRoleList(): void {
    this.RoleService.getRoleList().subscribe((x) => {
      this.roles = x.slice(0, 50);
    });
  }

  ngOnInit(): void {
    this.getRoleList();
  }

  applyForm = new FormGroup({
    username: new FormControl(''),
    agency: new FormControl(''),
  });

  changeSearch(): void {
    Object.entries(this.applyForm.value).some(([key, value]) => value !== '')
      ? (document
          .getElementById('search')
          ?.classList.remove('text-white', 'bg-[#DADADA]'),
        document
          .getElementById('search')
          ?.classList.add('text-primary', 'bg-[#E7F7F4]'))
      : (document
          .getElementById('search')
          ?.classList.add('text-white', 'bg-[#DADADA]'),
        document
          .getElementById('search')
          ?.classList.remove('text-primary', 'bg-[#E7F7F4]'));
  }
}
