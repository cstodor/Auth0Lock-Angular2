import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ProfileComponent } from './pages/profile/profile.component';
import { MainComponent } from './pages/main/main.component';

// Auth
import { AuthGuard } from '../auth/auth.guard';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'user-profile',
                component: ProfileComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule { }

export const dashboardRoutingProviders: any[] = [
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes)