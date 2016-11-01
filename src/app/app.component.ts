import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  url_entities: FirebaseListObservable<any>;
  
  constructor(private af: AngularFire, private auth: FirebaseAuth) {
    this.url_entities = af.database.list('/urls');
  }
  
  logout() {
     this.af.auth.logout();
  }
  
}
