import { AdminService } from './_services/admin.service';
import { AuthGuard } from './_guards/auth.guard';
import { HttpInterceptorService } from './_services/http-interceptor.service';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { SharedModule } from './shared/modules/shared.module';
import { BeneficiarySearchComponent } from './beneficiary-search/beneficiary-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeneficiaryFormComponent } from './beneficiary-form/beneficiary-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserManagementComponent } from './user-management/user-management.component';
import { HasRoleDirective } from './_directives/has-role.directive';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    BeneficiarySearchComponent,
    DashboardComponent,
    BeneficiaryFormComponent,
    PageNotFoundComponent,
    LoginComponent,
    MainlayoutComponent,
    UserManagementComponent,
    HasRoleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AngularMaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),

  ],
  providers: [AuthService, AdminService, AuthGuard, HttpInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
