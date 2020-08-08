import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}; // For storing login info.
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  login()
  {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Login Successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  // tslint:disable-next-line: typedef
  loggedIn()
  {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void
  {
    localStorage.removeItem('token');
    this.alertify.message('Log out');
  }

}
