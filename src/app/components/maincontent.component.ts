import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'maincontent',
  templateUrl: './maincontent.component.html'
})
export class MainContentComponent {

  userUID: string;
  urls: FirebaseListObservable<any>;
  displayPage: string;

  constructor(private af: AngularFire) {
    this.urls = af.database.list('/urls', { preserveSnapshot: true });    
    this.af.auth.subscribe((state: FirebaseAuthState) => {
          this.userUID = state.auth.uid;
      });
    
    this.displayPage = 'posts';
  }
  
  like(url: firebase.database.DataSnapshot) {
    if (this.userUID) {
      url.ref.child('likes/' + this.userUID).set(true);
    }
  }
  
  unlike(url: firebase.database.DataSnapshot) {
    if (this.userUID) {
      url.ref.child('likes/' + this.userUID).remove();
    }
  }
  
  doesUserLike(url: firebase.database.DataSnapshot) {
    if (this.userUID) return url.hasChild('likes/' + this.userUID);
    else return false;
  }
  
  countUrlLikes(url: firebase.database.DataSnapshot) {
    return url.child('likes').numChildren();
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
