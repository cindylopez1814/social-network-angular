import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { WallComponent } from './wall/wall.component';
import { ChatComponent } from './chat/chat.component';
import { ActiveComponent } from './active/active.component';
import { DiarieComponent } from './diarie/diarie.component';

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
    DiarieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
