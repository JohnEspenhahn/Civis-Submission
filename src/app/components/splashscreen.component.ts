import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'splashscreen',
  templateUrl: './splashscreen.component.html',
  styles: [`
    .logo {
      text-align: center;
    }
  `
  ]
})
export class SplashScreenComponent {

  constructor(private af: AngularFire) { }
  
  login() {
    this.af.auth.login();
  }
  
  loginAnonymously() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }
  
}
