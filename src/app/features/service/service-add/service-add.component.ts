import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ServicePack } from '../../../core/services/service.service';
import { StatusComponent } from '../../../core/component/status/status.component';
import { Service } from '../../../core/type/service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-service-add',
  standalone: true,
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    StatusComponent,
    NzIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ServiceAddComponent {
  constructor(
    private ServicePack: ServicePack,
    private message: NzMessageService
  ) {}

  applyForm = new FormGroup({
    maSanPham: new FormControl(''),
    serviceName: new FormControl(''),
    userAmount: new FormControl(''),
    adminAmount: new FormControl(''),
    collaboratorsAmount: new FormControl(''),
    collaboratorsLevel: new FormControl(''),
    maxOrderAmount: new FormControl(''),
  });
  isNumeric: boolean = false;
  checkNaNUser(): void {
    this.isNumeric = !isNaN(Number(this.applyForm.value.userAmount?.trim()));
  }
  checkNaNAdmin(): void {
    this.isNumeric = !isNaN(Number(this.applyForm.value.adminAmount?.trim()));
  }
  checkNaNCollaborators(): void {
    this.isNumeric = !isNaN(
      Number(this.applyForm.value.collaboratorsAmount?.trim())
    );
  }
  checkNaNMaxOrderAmount(): void {
    this.isNumeric = !isNaN(
      Number(this.applyForm.value.maxOrderAmount?.trim())
    );
  }

  service: any;

  addService2(): void {
    this.service = {
      serviceCode: this.applyForm.value.maSanPham,
      serviceName: this.applyForm.value.serviceName,
      user: this.applyForm.value.userAmount,
      order: this.applyForm.value.maxOrderAmount,
      collaborators: this.applyForm.value.collaboratorsAmount,
      status: true,
    };
    this.addService(this.service);
  }

  addService(service: object): void {
    if (!service) {
      return;
    }
    this.ServicePack.addService(service as Service).subscribe(
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

  payment: any = [];
  number: number = 0;
  addDisable: boolean = false;
  addMax: boolean = true;

  addPayment(): void {
    this.number = this.number + 1;
    this.payment.push(this.number);
    if (this.number >= 9) {
      this.addMax = false;
    } else {
      this.addMax = true;
    }
    this.addDisable = true;
    this.selectDis.push(false);
  }

  deletePayment(rowIndex: number): void {
    this.payment.splice(rowIndex, 1);
    this.dis[this.periods[rowIndex].disabled.findIndex((s: any) => s == true)] =
      false;
    this.periods[rowIndex].disabled[
      this.periods[rowIndex].disabled.findIndex((s: any) => s == true)
    ] = false;
    if (rowIndex != this.selectDis.length - 1) {
      this.selectDis.shift();
    } else {
      this.selectDis.pop();
      this.addDisable = false;
    }
    this.number = this.number - 1;
  }

  selectDis: any = [];

  periods: any = [
    {
      value: '1 tháng',
      disabled: [false, false, false, false, false, false, false, false, false],
    },
    {
      value: '3 tháng',
      disabled: [false, false, false, false, false, false, false, false, false],
    },
    {
      value: '6 tháng',
      disabled: [false, false, false, false, false, false, false, false, false],
    },
    {
      value: '1 năm',
      disabled: [false, false, false, false, false, false, false, false, false],
    },
    {
      value: '2 năm',
      disabled: [false, false, false, false, false, false, false, false, false],
    },
    {
      value: '3 năm',
      disabled: [false, false, false, false, false, false, false, false, false],
    },
    {
      value: '4 năm',
      disabled: [false, false, false, false, false, false, false, false, false],
    },
    {
      value: '5 năm',
      disabled: [false, false, false, false, false, false, false, false, false],
    },
    {
      value: 'Vĩnh viễn',
      disabled: [false, false, false, false, false, false, false, false, false],
    },
  ];

  dis: any = [false, false, false, false, false, false, false, false, false];

  findIndex(event: any): void {
    return this.periods.findIndex((s: any) => s.value == event);
  }

  filteredOptions(rowIndex: number, optionIndex: any): void {
    this.dis[optionIndex] = true;
    this.periods[rowIndex].disabled[optionIndex] = true;
    this.selectDis[this.selectDis.length - 1] = true;
    this.addDisable = false;
  }
}
