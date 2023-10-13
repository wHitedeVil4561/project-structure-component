import { Routes } from '@angular/router';
import { ROUTES } from './config/route.constant';

export const routes: Routes = [
  {
    path: ROUTES.AUTH.auth,
    loadChildren: () =>
      import('./pages/auth/auth-container.routes').then((m) => m.AuthRoutes),
  },
  //   {
  //     path: '',
  //     async loadComponent() {
  //       const m = await import('./pages/home/home.component');
  //       return m.HomeComponent;
  //     },
  //   },
  {
    path: '',
    loadChildren: () =>
      import('./pages/theme/theme.routes').then((m) => m.ThemeRoutes),
  },
];
