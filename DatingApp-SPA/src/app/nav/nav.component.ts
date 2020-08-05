import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}; // For storing login info.
  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  login()
  {
    this.authService.login(this.model).subscribe(next => {
      console.log('Login Successful');
    }, error => {
      console.log('Failed to login');
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
    console.log('Log out');
  }

}
