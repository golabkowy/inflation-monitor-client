import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) {
  }

  testGET(): void {
    console.log('TEST GET');
    this.httpClient.get('http://localhost:8080/testGET').subscribe((result) => {
      console.log('udal sie test GET');
      console.log(result);
    });
  }

  testPOST(): void {
    console.log('TEST GET');
    this.httpClient.post('http://localhost:8080/testPOST', {}).subscribe(result => {
      console.log('udal sie test POST');
      console.log(result);
    });
  }
}
