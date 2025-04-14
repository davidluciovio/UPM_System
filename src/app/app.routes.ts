import { Routes } from '@angular/router';
import { LoginPageComponent } from './upm/pages/login-page/login-page.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'home',
        loadComponent: () => import('../app/upm/pages/home-page/home-page.component'),
        children: [
            {
                path: 'production-report',
                loadComponent: () => import('../app/upm/pages/production/production-report-page/production-report-page.component')
            }
        ],
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
