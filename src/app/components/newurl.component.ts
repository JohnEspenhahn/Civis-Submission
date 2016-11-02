import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'newurl',
  templateUrl: './newurl.component.html',
  styles: [`
    .ng-valid[required], .ng-valid.required  {
      padding-left: 2px;
      border-left: 5px solid #42A948; /* green */
    }

    .ng-invalid:not(form)  {
      padding-left: 2px;
      border-left: 5px solid #a94442; /* red */
    }
  `]
})
export class NewUrlComponent {
  @Output()
  onFinished = new EventEmitter();

  username: string;
  message: string;
  urls: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.message = "";
    this.urls = af.database.list('/urls');
    
    this.af.auth.subscribe((state: FirebaseAuthState) => {
            this.username = state.auth.displayName;
        });
  }
  
  addPost() {
    this.urls.push({ 
      upvotes: [ ],
      text: this.message,
      author: this.username
    });
    
    this.onFinished.emit();
  }
}