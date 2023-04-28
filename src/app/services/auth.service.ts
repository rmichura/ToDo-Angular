import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
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
      tap((token: LoginResponse) => this.setTokenExpiresDate(token.token)),
      catchError((error) => {
        return of(error)
      })
    )
  }

  logout(): Observable<unknown> {
    return this.httpClient.post(`${this.URL}logout`, null, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('LOCALSTORAGE_TOKEN_KEY')}`
      }
    }).pipe(
      tap(() => {
        localStorage.removeItem('LOCALSTORAGE_TOKEN_KEY')
        localStorage.removeItem('EXPIRES_DATE')
      }),
      catchError((error) => {
        return of(error)
      })
    )
  }

  register(body: RegisterRequest): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(`${this.URL}register`, body).pipe(
      tap((token: RegisterResponse) => this.setTokenExpiresDate(token.token)),
      catchError((error) => {
        return of(error)
      })
    )
  }

  private setTokenExpiresDate(token: string) {
    const now: Date = new Date();
    const endDate: Date | any = new Date(now.getTime() + 30 * 600);
    localStorage.setItem('LOCALSTORAGE_TOKEN_KEY', token)
    localStorage.setItem('EXPIRES_DATE', endDate)
  }
}
