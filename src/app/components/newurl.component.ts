import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import 'firebase';

@Component({
  selector: 'newurl',
  templateUrl: './newurl.component.html',
  styles: [ './newurl.component.css' ]
})
export class NewUrlComponent {
  @Output()
  onFinished = new EventEmitter();

  message: string;
  
  constructor(private af: AngularFire) {
    this.message = "";
  }
  
  addPost() {
    if (this.message) {
      var subscription = this.af.auth.subscribe((state: FirebaseAuthState) => {
            const username = state.auth.displayName || 'Anonymous';
            const urls = this.af.database.list('/urls');
            urls.push({
              likes: {},
              text: this.message,
              author: username
            });
            
            this.onFinished.emit();
            subscription.unsubscribe();
        });
    }
  }
}