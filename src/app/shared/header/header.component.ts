import { Component, OnInit } from '@angular/core';
// Services
import { Auth } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  profile: any;

  constructor(private auth: Auth) {
    // this.profile = JSON.parse(localStorage.getItem('profile'));
    var profile_text = localStorage.getItem('profile');
    if (profile_text) {
      this.profile = JSON.parse(profile_text);
    }
    this.auth.onProfileUpdated.subscribe(newProfile => {
      this.profile = newProfile;
    });
  }

  ngOnInit() {
  }

}
