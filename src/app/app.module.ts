import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { SplashScreenComponent } from './components/splashscreen.component';
import { MainContentComponent } from './components/maincontent.component';
import { NewUrlComponent } from './components/newurl.component';
import { UrlComponent } from './components/url.component';
import { AuthService } from './services/authservice.service';
import { ValuesPipe } from './pipes/valuespipe.pipe';
import { CountPipe } from './pipes/count.pipe';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCJIe5yiXfaUWMVnxe2g7WwFdecuaaXLIk',
  authDomain: 'project-1-631b3.firebaseapp.com',
  databaseURL: 'https://project-1-631b3.firebaseio.com',
  storageBucket: 'project-1-631b3.appspot.com',
  messagingSenderId: "91552396547"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [ 
    AppComponent,
    SplashScreenComponent,
    MainContentComponent,
    NewUrlComponent,
    UrlComponent,
    ValuesPipe,
    CountPipe
  ],
  providers: [
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}