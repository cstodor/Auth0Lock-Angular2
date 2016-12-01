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
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }

  ngOnInit() {
  }

}
