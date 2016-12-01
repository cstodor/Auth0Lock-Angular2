import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'user-profile',
                component: ProfileComponent,
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