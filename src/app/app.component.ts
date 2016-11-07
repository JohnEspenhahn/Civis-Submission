import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private af: AngularFire, private auth: FirebaseAuth) { }
  
  logout() {
     this.af.auth.logout();
  }
  
}
