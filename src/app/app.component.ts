import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  constructor(
    public authService:AuthService
    ){

    }
     
    email: string;
    password: string;
     
    signUp() {
    this.authService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    }
     
    signIn() {
    this.authService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    }
     
    signOut() {
    this.authService.SignOut();
    }
     
    }
