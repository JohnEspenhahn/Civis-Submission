import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs';

@Component({
  selector: 'maincontent',
  templateUrl: './maincontent.component.html'
})
export class MainContentComponent {

  displayName: string;
  userUID: string;
  
  urls: FirebaseListObservable<any>;
  displayPage: string;

  constructor(private af: AngularFire) {
    this.urls = af.database.list('/urls', { preserveSnapshot: true });    
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
    return Observable.create((observer) => {
        url.ref.child('likes').on('value', (snapshot) => {
          if (this.userUID) observer.next(snapshot.hasChild(this.userUID));
          else observer.next(false);
        });
      });
  }
  
  countUrlLikes(url: firebase.database.DataSnapshot) {
    return Observable.create((observer) => {
        url.ref.on('value', (snapshot: any) => {
          observer.next(snapshot.child('likes').numChildren());
        });
      });
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
