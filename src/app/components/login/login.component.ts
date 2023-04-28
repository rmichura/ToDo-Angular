import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {LoginFormService} from "./form/login-form.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup | any

  constructor(
    private loginService: AuthService,
    private router: Router,
    private loginFormService: LoginFormService) {
  }

  ngOnInit(): void {
    this.form = this.loginFormService.createFormGroup()
  }

  submit(): void {
    this.loginService.login(this.form.value).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }
}
