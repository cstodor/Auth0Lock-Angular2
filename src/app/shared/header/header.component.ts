import { Component, OnInit } from '@angular/core';
import { Auth } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `header {
      background: #eee;
      width: 100%;
      padding: 20px 0;
    }
    .logo {
      margin: 0 20px;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
    }
    .login-btn,
    .logout-btn {
      float: right;
      margin: 0 20px;
    }
    .user-menu {
      float: right;
      margin: 0;
    }
    .user-menu > li {
      display: inline-block;
    }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private auth: Auth) {}

  ngOnInit() {
  }

}
