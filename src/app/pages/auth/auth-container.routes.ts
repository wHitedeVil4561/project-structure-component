import { Route } from '@angular/router';
import { ROUTES } from 'src/app/config/route.constant';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const AuthRoutes: Route[] = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: ROUTES.AUTH.login,
        component: LoginComponent,
      },
      {
        path: ROUTES.AUTH.signup,
        component: SignUpComponent,
      },
    ],
  },
];
