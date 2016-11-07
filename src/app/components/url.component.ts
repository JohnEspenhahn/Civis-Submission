import { Component, Input, Output, EventEmitter, OnInit, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../services/authservice.service';
import { Observable } from 'rxjs';
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
export class UrlComponent implements OnInit {

  @Input()
  url;
  
  private comments = {};
  
  constructor(public af: AngularFire, public auth: AuthService, private _ngZone: NgZone) { }
  
  ngOnInit() {
    this.af.database.list(`/url_comments/${this.url.$key}`).subscribe(cs => {
      this._ngZone.run(() => {
        this.comments = cs;
      });
    });
  }
  
  like() {
    if (this.auth.getUserUID()) {
      let updatedLikes = {};
      updatedLikes[this.auth.getUserUID()] = true;
      
      this.af.database.list(`/urls/${this.url.$key}`).update('likes', updatedLikes);
    }
  }
  
  unlike() {
    if (this.auth.getUserUID()) {
      this.af.database.list(`/urls/${this.url.$key}/likes`).remove(this.auth.getUserUID());
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
  
}