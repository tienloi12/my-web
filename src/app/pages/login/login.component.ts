import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from '@firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private auth: Auth) {

  }

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authService.currentUser = user;
        console.log(user);

      } else {
        console.log('No user');
        this.authService.currentUser = null;
      }
    })
  }
  getUser() {
    return this.authService.currentUser;
  }

  login() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }

  callback() {

  }
}
