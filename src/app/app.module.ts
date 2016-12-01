import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AUTH_PROVIDERS } from 'angular2-jwt';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
// Modules
import { DashboardModule } from './dashboard/dashboard.module';
// Routing
import { appRouting, appRoutingProviders } from './app-routing.module';
// Services
import { Auth } from './auth/auth.service';
// Authentication
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    appRouting
  ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
