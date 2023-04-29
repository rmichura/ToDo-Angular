import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Store {
  getAccess(): boolean {
    const now: Date = new Date;
    const endDate: Date | any = localStorage.getItem('EXPIRES_DATE');
    const expirationDate: Date = new Date(endDate);
    if (now <= expirationDate) {
      return true;
    } else {
      localStorage.removeItem('LOCALSTORAGE_TOKEN_KEY');
      localStorage.removeItem('EXPIRES_DATE');
      return false;
    }
  }
}
