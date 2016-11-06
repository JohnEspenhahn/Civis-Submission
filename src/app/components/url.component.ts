import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AuthService } from '../services/authservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'url',
  templateUrl: './url.component.html'
})
export class UrlComponent {

  @Input()
  url;
  
  constructor(public af: AngularFire, public auth: AuthService) { }
  
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
      this.af.database.list(`/urls/${this.url.$key}/comments`).push({ author: this.auth.getDisplayName(), comment: comment });
    }
  }
  
}