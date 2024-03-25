import { Routes } from '@angular/router';
import { AuthForceLoginGuard } from './core/guards/auth-force-login.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user',
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/layout/main/main.routes').then((m) => m.MAIN_ROUTES),
    canActivate: [AuthForceLoginGuard],
  },
];
