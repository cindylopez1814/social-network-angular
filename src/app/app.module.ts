import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { WallComponent } from './wall/wall.component';
import { ChatComponent } from './chat/chat.component';
import { ActiveComponent } from './active/active.component';
import { DiarieComponent } from './diarie/diarie.component';
import { ImputLoginComponent } from './imput-login/imput-login.component';
import { LoginAuthComponent } from './login-auth/login-auth.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';

const appRoutes: Routes= [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'diarioMural',
    component: WallComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomePageComponent,
    ProfileComponent,
    WallComponent,
    ChatComponent,
    ActiveComponent,
    DiarieComponent,
    ImputLoginComponent,
    LoginAuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
