import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {RegisterFormService} from "./form/register-form.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any

  constructor(
    private loginService: AuthService,
    private router: Router,
    private registerFormService: RegisterFormService) {
  }

  ngOnInit(): void {
    this.form = this.registerFormService.createFormGroup();
  }

  submit(): void {
    if (this.form.value.password === this.form.value.confirmPassword) {
      this.loginService.register(this.form.value).subscribe(() => {
        this.router.navigate(['/home'])
      })
    } else {
      console.log("Passwords is invalid")
    }
  }
}
