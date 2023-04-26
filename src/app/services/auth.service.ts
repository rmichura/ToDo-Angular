import {Injectable} from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse, RegisterRequest, RegisterResponse} from "../interfaces/auth-data.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = "https://reqres.in/api/"

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  login(body: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.URL}login`, body).pipe(
      tap((token: LoginResponse) => localStorage.setItem('LOCALSTORAGE_TOKEN_KEY', token.token)),
      tap(() => console.log("Poprawne logowanie"))
    )
  }

  logout(body: null): Observable<unknown> {
    return this.httpClient.post(`${this.URL}logout`, body).pipe(
      tap(() => localStorage.removeItem('LOCALSTORAGE_TOKEN_KEY')),
      tap(() => console.log("Poprawne się wylogowałeś"))
    )
  }

  register(body: RegisterRequest): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(`${this.URL}register`, body).pipe(
      tap((token: RegisterResponse) => localStorage.setItem('LOCALSTORAGE_TOKEN_KEY', token.token)),
      tap(() => console.log("Poprawna rejstracja"))
    )
  }
}
