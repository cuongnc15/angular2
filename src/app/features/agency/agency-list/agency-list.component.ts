import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StatusComponent } from '../../../core/component/status/status.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ButtonSearchComponent } from '../../../core/component/button-search/button-search.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgencyService } from '../../../core/services/agency.service';

/**
 * @title Select with custom panel styling
 */
@Component({
  selector: 'app-agency',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    StatusComponent,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ButtonSearchComponent,
    NzIconModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class AgencyListComponent {
  pageSize: number = 10;
  page: number = 1;
  total: any;

  applyForm = new FormGroup({
    agencyCode: new FormControl(''),
    agencyName: new FormControl(''),
  });

  constructor(private AgencyService: AgencyService) {}

  agencyes: any = [];

  getAgencyList(): void {
    this.AgencyService.getAgencyList().subscribe((x) => {
      this.agencyes = x.slice(0, 50);
    });
  }

  ngOnInit(): void {
    this.getAgencyList();
  }

  categories: any[] = [
    { value: 'Văn phòng phẩm', viewValue: 'Văn phòng phẩm' },
    { value: 'Đồ gia dụng và phụ kiện', viewValue: 'Đồ gia dụng và phụ kiện' },
    {
      value: 'Đồ chơi và đồ dùng trẻ em',
      viewValue: 'Đồ chơi và đồ dùng trẻ em',
    },
    { value: 'Thực phẩm', viewValue: 'Thực phẩm' },
    { value: 'Quần áo', viewValue: 'Quần áo' },
    { value: 'Phụ kiện thú cưng', viewValue: 'Phụ kiện thú cưng' },
    { value: 'Đồ nội thất', viewValue: 'Đồ nội thất' },
    {
      value: 'Đồ dùng điện tử và thiết bị công nghệ',
      viewValue: 'Đồ dùng điện tử và thiết bị công nghệ',
    },
    { value: 'Phụ kiện ô tô, xe máy', viewValue: 'Phụ kiện ô tô, xe máy' },
    { value: 'Sản phẩm nghệ thuật', viewValue: 'Sản phẩm nghệ thuật' },
    {
      value: 'Trò chơi điện tử và phầm mềm giải trí',
      viewValue: 'Trò chơi điện tử và phầm mềm giải trí',
    },
    { value: 'Y tế', viewValue: 'Y tế' },
    { value: 'Giáo dục', viewValue: 'Giáo dục' },
    { value: 'Sản phẩm công nghệ', viewValue: 'Sản phẩm công nghệ' },
    { value: 'Sách', viewValue: 'Sách' },
  ];

  packages: any[] = [
    { value: 'Gói cơ bản', viewValue: 'Gói cơ bản' },
    { value: 'Gói chuyên nghiệp', viewValue: 'Gói chuyên nghiệp' },
    {
      value: 'Gói tiêu chuẩn',
      viewValue: 'Gói tiêu chuẩn',
    },
  ];

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
