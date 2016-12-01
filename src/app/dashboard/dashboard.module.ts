import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainComponent } from './pages/main/main.component';

// Routing
import { dashboardRouting, dashboardRoutingProviders } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent,
    MainComponent,
    ProfileComponent
    ],
  providers: [
    dashboardRoutingProviders,
  ]
})

export class DashboardModule { 
  
}
