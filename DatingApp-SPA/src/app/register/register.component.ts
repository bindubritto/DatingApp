import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authSerivice: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  register(): void
  {
    // this.authSerivice.register(this.model).subscribe(() => {
    //   this.alertify.success('Registration Successful');
    // }, error => {
    //   console.log(error);
    //   this.alertify.error(error);
    // });

    console.log(this.registerForm.value);
  }

  cancel(): void
  {
    this.cancelRegister.emit(false);
    this.alertify.message('cancelled');
  }

}
