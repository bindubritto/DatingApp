import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authSerivice: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(): void
  {
    this.authSerivice.register(this.model).subscribe(() => {
      this.alertify.success('Registration Successful');
    }, error => {
      console.log(error);
      this.alertify.error(error);
    });
  }

  cancel(): void
  {
    this.cancelRegister.emit(false);
    this.alertify.message('cancelled');
  }

}
