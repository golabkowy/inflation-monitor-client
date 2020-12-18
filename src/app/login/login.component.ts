import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {TestService} from '../services/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private authService: AuthService, private testService: TestService) {
  }

  ngOnInit(): void {
  }

  loginFunction(): void {
    this.authService.login(this.login, this.password);
  }

  googleLogin(): void {
    this.authService.oauth2Login();
  }

  testGET(): void {
    this.testService.testGET();
  }

  testPOST(): void {
    this.testService.testPOST();
  }
}
