import { Injectable, EventEmitter } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig } from './auth.config';

// Avoid name not found warnings
// declare var Auth0Lock: any;
let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});
  profile: any;
  onProfileUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    // Auth Lock Pop Up Registration
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult: any) => {
      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          throw new Error(error);
        }
        localStorage.setItem('id_token', authResult.idToken);
        console.log('Set \'id token\' to Local Storage');
        localStorage.setItem('profile', JSON.stringify(profile)); // We will wrap the profile into a JSON object as In local Storage you can only store strings
        console.log('Set \'profile\' to Local Storage');
        console.log('PROFILE INFORMATION: ' + profile);
        this.onProfileUpdated.emit(profile);
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.onProfileUpdated.emit(null); // HUNG
  };
}
