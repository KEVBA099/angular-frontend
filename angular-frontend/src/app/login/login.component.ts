import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        // Redirigir al usuario a la página de gestión de usuarios
        this.router.navigate(['/user-management']);
      },
      error => {
        console.error('Error en el inicio de sesión', error);
      }
    );
  }
}
