import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { VisitorPageComponent } from './pages/visitor-page/visitor-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { httpInterceptorProviders } from './shared/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    UserPageComponent,
    AdminPageComponent,
    VisitorPageComponent,
    ProfilePageComponent,
    LogoutComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
