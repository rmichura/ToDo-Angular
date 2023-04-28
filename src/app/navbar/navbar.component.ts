import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Store} from "../store/store";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isAccess: boolean = false;

  constructor(
    private loginService: AuthService,
    private router: Router,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((value: any): void => {
      if (value.url) {
        this.isAccess = !!(localStorage.getItem('LOCALSTORAGE_TOKEN_KEY') && this.store.getAccess());
      }
    })
  }

  logout(): void {
    this.loginService.logout().subscribe(() =>
      this.router.navigate(['/login']))
  }
}
