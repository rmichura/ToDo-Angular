import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "../store/store";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store,
  ) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('LOCALSTORAGE_TOKEN_KEY') && this.store.getAccess()) return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
