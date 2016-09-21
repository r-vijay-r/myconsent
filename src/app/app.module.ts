import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';
import { AuthProviders,AuthMethods} from 'angularfire2';

const firebaseConfig = {
 apiKey: "AIzaSyAr0VHZmbKw_dvH5q0OB8hJElD4QZMp4s0",
 authDomain: "myconsent-f5d0d.firebaseapp.com",
 databaseURL: "https://myconsent-f5d0d.firebaseio.com",
 storageBucket: "myconsent-f5d0d.appspot.com"
}
const AuthenticationConfig = {
   method: AuthMethods.Popup,
   provider: AuthProviders.Google
 }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, AuthenticationConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
