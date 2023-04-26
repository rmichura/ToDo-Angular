import {Component} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private loginService: AuthService,
    private router: Router
  ) {
  }

  logout(): void {
    this.loginService.logout(null).subscribe(() =>
      this.router.navigate(['/login']))
  }
}
