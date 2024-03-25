import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusComponent } from '../../../core/component/status/status.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

interface Tittle {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agency-add',
  standalone: true,
  templateUrl: './agency-add.component.html',
  styleUrls: ['./agency-add.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    StatusComponent,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class AgencyAddComponent {
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

  methodAssignment: any[] = [
    { value: 'Mua mới', viewValue: 'Mua mới' },
    { value: 'Nâng gói công thức 1', viewValue: 'Nâng gói công thức 1' },
    {
      value: 'Nâng gói công thức 2',
      viewValue: 'Nâng gói công thức 2',
    },
    {
      value: 'Nâng gói công thức 3',
      viewValue: 'Nâng gói công thức 3',
    },
    {
      value: 'Hạ gói',
      viewValue: 'Hạ gói',
    },
    {
      value: 'Gia hạn',
      viewValue: 'Gia hạn',
    },
  ];
}
