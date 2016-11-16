import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../services/authservice.service';
import { Observable, Subscription } from 'rxjs';
import 'firebase';

@Component({
  selector: 'url',
  templateUrl: './url.component.html',
  styles: [`
    h4 {
      padding-right: 50px;
    }
  `]
})
export class UrlComponent implements OnInit, OnDestroy {

  @Input()
  url;
  
  private comments = {};
  private likes = {};
  
  private comments_sub: Subscription;
  private likes_sub: Subscription;
  
  constructor(public af: AngularFire, public auth: AuthService, private _ngZone: NgZone) { }
  
  ngOnInit() {
    this.comments_sub = this.af.database.list(`/url_comments/${this.url.$key}`).subscribe(cs => {
      this._ngZone.run(() => this.comments = cs );
    });
    
    this.likes_sub = this.af.database.list(`/url_likes/${this.url.$key}`).subscribe(ls => {
      this._ngZone.run(() => this.likes = ls );
    });
  }
  
  doesUserLike() {
    if (this.auth.getUserUID()) {
      for (let like of this.likes) {
        if (like.$key == this.auth.getUserUID()) return true;
      }
    }
    
    return false;
  }
  
  like() {
    if (this.auth.getUserUID()) {
      let updatedLikes = {};
      updatedLikes[this.auth.getUserUID()] = true;
      
      this.af.database.list(`/url_likes`).update(this.url.$key, updatedLikes);
    }
  }
  
  unlike() {
    if (this.auth.getUserUID()) {
      this.af.database.list(`/url_likes/${this.url.$key}`).remove(this.auth.getUserUID());
    }
  }
  
  addComment(comment) {
    if (this.auth.getDisplayName()) {
      this.af.database.list(`/url_comments/${this.url.$key}`).push({
        author: this.auth.getDisplayName(), 
        comment: comment 
      });
    }
  }
  
  ngOnDestroy() {
    if (this.likes_sub) this.likes_sub.unsubscribe();
    if (this.comments_sub) this.comments_sub.unsubscribe();
  }
  
}
