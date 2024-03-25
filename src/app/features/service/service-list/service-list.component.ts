import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonSearchComponent } from '../../../core/component/button-search/button-search.component';
import { ServicePack } from '../../../core/services/service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Period {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-service-list',
  standalone: true,
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatIconModule,
    ButtonSearchComponent,
    NgxPaginationModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    NzIconModule,
    ReactiveFormsModule,
  ],
})
export class ServiceListComponent {
  applyForm = new FormGroup({
    serviceName: new FormControl(''),
    userAmount: new FormControl(''),
    maxOrderAmount: new FormControl(''),
    collaboratorsAmount: new FormControl(''),
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

  pageSize: number = 10;
  page: number = 1;
  total: any;

  periods: Period[] = [
    { value: '1 tháng', viewValue: '1 tháng' },
    { value: '3 tháng', viewValue: '3 tháng' },
    { value: '6 tháng', viewValue: '6 tháng' },
    { value: '2 năm', viewValue: '2 năm' },
    { value: '3 năm', viewValue: '3 năm' },
    { value: '4 năm', viewValue: '4 năm' },
    { value: '5 năm', viewValue: '5 năm' },
    { value: 'Vĩnh viễn', viewValue: 'Vĩnh viễn' },
  ];

  constructor(private ServicePack: ServicePack) {}
  services: any;

  getListService(): void {
    this.ServicePack.getListService().subscribe((x) => {
      this.services = x.slice(0, 50);
    });
  }

  ngOnInit(): void {
    this.getListService();
  }
}
