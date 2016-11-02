import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'maincontent',
  templateUrl: './maincontent.component.html'
})
export class MainContentComponent {

  urls: FirebaseListObservable<any>;
  state: string;

  constructor(private af: AngularFire) {
    this.urls = af.database.list('/urls');
    this.urls.subscribe((url) => {
      console.log(url.child("/stars"));
    });
    
    this.state = 'posts';
  }
  
  logout() {
    this.af.auth.logout();
  }
  
  newPost() {
    
  }
}
