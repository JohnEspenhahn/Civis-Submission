import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../services/authservice.service';

@Component({
  selector: 'newurl',
  templateUrl: './newurl.component.html',
  styles: [ './newurl.component.css' ]
})
export class NewUrlComponent {
  @Output()
  onFinished = new EventEmitter();

  message: string;
  
  constructor(private af: AngularFire, private auth: AuthService) {
    this.message = '';
  }
  
  addPost() {
    if (this.message && this.auth.getDisplayName()) {
      this.af.database.list('/urls').push({
        likes: {},
        text: this.message,
        author: this.auth.getDisplayName()
      });
      
      this.onFinished.emit();
    }
  }
}