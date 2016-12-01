import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// Components
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
// Routing
import { dashboardRouting, dashboardRoutingProviders } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent
    ],
  providers: [
    dashboardRoutingProviders,
  ]
})

export class DashboardModule { 
  
}
