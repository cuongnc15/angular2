import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ServicePack } from '../../../core/services/service.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusComponent } from '../../../core/component/status/status.component';
import { Service } from '../../../core/type/service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { EditModalComponent } from './service-edit-modal/edit-modal.component';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
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
    EditModalComponent,
  ],
})
export class ServiceDetailComponent {
  constructor(
    private ServicePack: ServicePack,
    private message: NzMessageService
  ) {}

  route: ActivatedRoute = inject(ActivatedRoute);
  serviceId = this.route.snapshot.params['id'];

  service: any = {};
  getService(): void {
    this.ServicePack.getService(this.serviceId).subscribe(
      (data) => (this.service = data)
    );
  }

  ngOnInit(): void {
    this.getService();
  }

  applyForm = new FormGroup({
    maSanPham: new FormControl(''),
    serviceName: new FormControl(''),
    userAmount: new FormControl(''),
    adminAmount: new FormControl(''),
    collaboratorsAmount: new FormControl(''),
    collaboratorsLevel: new FormControl(''),
    maxOrderAmount: new FormControl(''),
  });

  addUpdate2(): void {
    this.service = {
      id: this.serviceId,
      serviceCode: this.applyForm.value.maSanPham,
      serviceName: this.applyForm.value.serviceName,
      user: this.applyForm.value.userAmount,
      order: this.applyForm.value.maxOrderAmount,
      collaborators: this.applyForm.value.collaboratorsAmount,
      status: true,
    };
    this.addUpdate(this.service);
  }

  addUpdate(serviceUpdate: object): void {
    if (!serviceUpdate) {
      return;
    }
    this.ServicePack.updateService(
      serviceUpdate as Service,
      this.serviceId
    ).subscribe();
  }

  payment: any = [];
  number: number = 0;
  addDisable: boolean = false;
  addMax: boolean = true;

  addPayment(): void {
    this.number = this.number + 1;
    this.payment.push(this.number);
    this.number >= 9 ? (this.addMax = false) : (this.addMax = true);

    this.addDisable = true;
    this.selectDis.push(false);
  }

  deletePayment(): void {
    const rowIndex = this.y;
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
    this.closeModal();
    this.selectedOption.splice(rowIndex, 1);

    this.number <= 9 ? (this.addMax = true) : this.addMax;
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

  filteredOptions(rowIndex: number, optionIndex: any, value: any): void {
    this.dis[optionIndex] = true;
    this.periods[rowIndex].disabled[optionIndex] = true;
    this.selectDis[this.selectDis.length - 1] = true;
    this.addDisable = false;
    this.selectedOption.push(value);
  }

  selectedOption: any = [];

  y: number = -1;
  modal: boolean = false;

  addModal(rowIndex: number): void {
    this.modal = true;
    this.y = rowIndex;
    this.optionValue = this.selectedOption[rowIndex];
  }

  closeModal(): void {
    this.modal = false;
  }

  optionValue: string = '';
}
