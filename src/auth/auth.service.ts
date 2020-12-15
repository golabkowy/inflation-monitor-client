import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  isAuthenticated(): boolean {
    return true;
  }

  login(login: string, password: string): boolean {
    const headersObj = new HttpHeaders().append('Authorization', 'Basic ' + btoa(`${login}:${password}`));
    this.httpClient.post('http://localhost:8080/auth/login', {}, {headers: headersObj})
      .subscribe((result) => {
        console.log('response');
        console.log(result);
      }, (error) => {
        console.log('login error');
        console.log(error);
      });
    return true;
  }

  logout(): boolean {
    return true;
  }
}
