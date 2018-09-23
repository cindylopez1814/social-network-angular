import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// componentes creados
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
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

// material angular io
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ImputPostComponent } from './imput-post/imput-post.component';
import { ImputChatComponent } from './imput-chat/imput-chat.component';

const appRoutes: Routes = [
  {
    path: '',
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
  },
  {
    path: 'Perfil',
    component: ProfileComponent
  },
  {
    path: 'Actividades',
    component: ActiveComponent
  },
  {
    path: 'Consejo_curso',
    component: DiarieComponent
  },
  {
    path: 'Chat',
    component: ChatComponent
  }
];

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
    LoginAuthComponent,
    ImputPostComponent,
    ImputChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
    AngularFireDatabaseModule,
    MatCardModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
