import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

export const appRoutingProviders: any[] = [
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
