import { Component, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs';

@Component({
  selector: 'maincontent',
  templateUrl: './maincontent.component.html'
})
export class MainContentComponent {
  
  urls: any[] = [];
  displayPage: string;

  constructor(private af: AngularFire, private _ngZone: NgZone) {
    af.database.list('/urls').subscribe((urls) => {
      this._ngZone.run(() => {
        this.urls = urls;
      });
    });
    
    this.displayPage = 'posts';
  }
  
  logout() {
    this.af.auth.logout();
  }
  
  viewRecentPosts() {
    this.displayPage = 'posts';
  }
  
  viewNewUrl() {
    this.displayPage = 'newurl';
  }
}
