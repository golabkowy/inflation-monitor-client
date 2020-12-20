import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isauthenticated = false;

  constructor(private httpClient: HttpClient) {
  }

  // before login returned boolean and have subscription here
  login(login: string, password: string): Observable<any> {
    const headersObj = new HttpHeaders().append('Authorization', 'Basic ' + btoa(`${login}:${password}`));
    return this.httpClient.post('http://127.0.0.1:8080/auth/login', {}, {headers: headersObj, withCredentials: true});
    //   .subscribe((result) => {
    //     console.log('Successfully logged in');
    //   }, (error) => {
    //     console.log('Login error');
    //     console.log(error);
    //   });
    // return true;
  }

  oauth2Login(): void {
    window.open('http://localhost:8080/oauth2/authorization/google', '_self');
  }

  // to musi nie byc asynchroniczne, bo najpierw zwraca false, a dopiero pozniej przychodzi responsik od servera
  isAuthenticated(): boolean {
    this.httpClient.get('http://127.0.0.1:8080/auth/is-logged', {withCredentials: true}).subscribe((success) => {
      console.log('user is logged authenticated');
      this.isauthenticated = true;
    }, (fail) => {
      console.log('user is NOT logged authenticated');
      this.isauthenticated = false;
    });
    console.log('I TAK COs zwracam i jest to' + this.isauthenticated);
    return this.isauthenticated;
  }

  logout(): boolean {
    return true;
  }
}
