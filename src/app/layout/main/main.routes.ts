import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UserComponent } from '../../features/user/user.component';
import { AuthForceLoginGuard } from '../../core/guards/auth-force-login.guard';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('../../features/user/user.routes').then((m) => m.USER_ROUTES),
        // canActivate: [AuthForceLoginGuard],
      },
      {
        path: 'qrCode',
        loadChildren: () =>
          import('../../features/qr-code/qr-code.routes').then(
            (m) => m.QRCODE_ROUTES
          ),
      },
      {
        path: 'danhSachDichVu',
        loadChildren: () =>
          import(
            '../../features/service/service-list/service-list.routes'
          ).then((m) => m.SERVICE_LIST_ROUTES),
      },
      {
        path: 'danhSachDichVu/taoMoi',
        loadChildren: () =>
          import('../../features/service/service-add/service-add.routes').then(
            (m) => m.SERVICE_ADD_ROUTES
          ),
      },
      {
        path: 'danhSachDichVu/:id',
        loadChildren: () =>
          import(
            '../../features/service/service-edit/service-detail.routes'
          ).then((m) => m.SERVICE_DETAIL_ROUTES),
      },
      {
        path: 'ganVaiTro',
        loadChildren: () =>
          import('../../features/role/role-list/role-list.routes').then(
            (m) => m.ROLE_LIST_ROUTES
          ),
      },
      {
        path: 'agency',
        loadChildren: () =>
          import('../../features/agency/agency-list/agency-list.routes').then(
            (m) => m.AGENCY_LIST_ROUTES
          ),
      },
      {
        path: 'agency/add',
        loadChildren: () =>
          import('../../features/agency/agency-add/agency-add.routes').then(
            (m) => m.AGENCY_ADD_ROUTES
          ),
      },
      {
        path: 'agency/analystic',
        loadChildren: () =>
          import(
            '../../features/agency/agency-analystic/agency-analystic.routes'
          ).then((m) => m.AGENCY_ANALYSTIC_ROUTES),
      },
    ],
  },
];
