import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(login: string, password: string): boolean {
    const headersObj = new HttpHeaders().append('Authorization', 'Basic ' + btoa(`${login}:${password}`));
    this.httpClient.post('http://127.0.0.1:8080/auth/login', {}, {headers: headersObj, withCredentials: true})
      .subscribe((result) => {
        console.log('Successfully logged in');
      }, (error) => {
        console.log('Login error');
        console.log(error);
      });
    return true;
  }

  oauth2Login(): void {
    window.open('http://localhost:8080/oauth2/authorization/google', '_self');
  }

  isAuthenticated(): boolean {
    this.httpClient.get('http://127.0.0.1:8080/auth/is-logged', {withCredentials: true}).subscribe((success) => {
      console.log('user is logged authenticated');
      return true;
    }, (fail) => {
      console.log('user is NOT logged authenticated');
      return false;
    });
    return false;
  }

  logout(): boolean {
    return true;
  }
}
