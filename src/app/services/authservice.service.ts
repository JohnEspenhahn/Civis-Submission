import { Injectable } from '@angular/core'
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  private displayName: string;
  private userUID: string;

  constructor(af: AngularFire) {
    af.auth.subscribe((state: FirebaseAuthState) => {
        if (state) {
          this.displayName = state.auth.displayName || 'Anonymous';
          this.userUID = state.auth.uid;
        } else {
          this.displayName = null;
          this.userUID = null;
        }
      });
  }
  
  getDisplayName() {
    return this.displayName;
  }
  
  getUserUID() {
    return this.userUID;
  }
}