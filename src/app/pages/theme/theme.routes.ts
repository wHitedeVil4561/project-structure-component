import { Route } from '@angular/router';
import { ThemeWrapperComponent } from './theme-wrapper/theme-wrapper.component';
import { HomeComponent } from '../home/home.component';

export const ThemeRoutes: Route[] = [
  {
    path: '',
    component: ThemeWrapperComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
