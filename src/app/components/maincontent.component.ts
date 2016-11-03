import { Component, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs';

@Component({
  selector: 'maincontent',
  templateUrl: './maincontent.component.html'
})
export class MainContentComponent {

  displayName: string;
  userUID: string;
  
  jsonURL: string;
  
  urls: any[] = [];
  displayPage: string;

  constructor(private af: AngularFire, private _ngZone: NgZone) {
    af.database.list('/urls').subscribe((urls) => {
      this._ngZone.run(() => this.urls = urls);
    });
    
    this.af.auth.subscribe((state: FirebaseAuthState) => {
        if (state) {
          this.displayName = state.auth.displayName || 'Anonymous';
          this.userUID = state.auth.uid;
        } else {
          this.displayName = null;
          this.userUID = null;
        }
      });
    
    this.displayPage = 'posts';
  }
  
  like(url) {
    if (this.userUID) {
      let updatedLikes = {};
      updatedLikes[this.userUID] = true;
      
      this.af.database.list('/urls/' + url.$key).update('likes', updatedLikes);
    }
  }
  
  unlike(url) {
    if (this.userUID) {
      this.af.database.list('/urls/' + url.$key + '/likes').remove(this.userUID);
    }
  }
  
  logout() {
    this.af.auth.logout();
  }
  
  viewRecentPosts() {
    this.displayPage = 'posts';
  }
  
  newUrl() {
    this.displayPage = 'newurl';
  }
}
