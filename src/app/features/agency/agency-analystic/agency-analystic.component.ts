import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

interface Agency {
  value: string;
  viewValue: string;
}

interface Period {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agency-analystic',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    NzIconModule,
  ],
  templateUrl: './agency-analystic.component.html',
  styleUrls: ['./agency-analystic.component.scss'],
})
export class AgencyAnalysticComponent {
  detailAgency: boolean = false;
  showOrder: boolean = false;
  showRevenueDetail: boolean = false;
  iconDown: boolean = true;
  iconRevenueDown: boolean = true;
  detailWithTime: boolean = false;

  showDetail(): void {
    this.detailAgency = true;
  }

  showDetailWithTime(): void {
    this.detailWithTime = true;
  }

  showOrderTongle(): void {
    this.showOrder = true;
    this.iconDown = false;
  }

  hideOrderTongle(): void {
    this.showOrder = false;
    this.iconDown = true;
  }

  showRevenueTongle(): void {
    this.showRevenueDetail = true;
    this.iconRevenueDown = false;
  }

  hideRevenueTongle(): void {
    this.showRevenueDetail = false;
    this.iconRevenueDown = true;
  }

  agencyes: Agency[] = [
    { value: 'tanVietBook', viewValue: 'Tân việt book' },
    { value: 'eztek', viewValue: 'Eztek' },
    { value: 'mathPro', viewValue: 'MathPro' },
  ];

  periods: Period[] = [
    { value: 'Hôm qua', viewValue: 'Hôm qua' },
    { value: 'Tuần qua', viewValue: 'Tuần qua' },
    { value: '1 tháng', viewValue: '1 tháng' },
    { value: '3 tháng', viewValue: '3 tháng' },
    { value: '6 tháng', viewValue: '6 tháng' },
    { value: '1 năm', viewValue: '1 năm' },
    { value: 'Tất cả', viewValue: 'Tất cả' },
  ];
}
