import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'splashscreen',
  templateUrl: './splashscreen.component.html'
})
export class SplashScreenComponent {

  constructor(private af: AngularFire) { }
  
  login() {
    this.af.auth.login();
  }
  
}
