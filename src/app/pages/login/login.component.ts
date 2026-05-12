import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  contrasenya = '';
  errorLogin = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  iniciarSessio(): void {
    const correcte = this.authService.login(this.email, this.contrasenya);

    if (correcte) {
      this.router.navigate(['/preferits']);
    } else {
      this.errorLogin = 'Credencials incorrectes. Revisa el correu i la contrasenya.';
    }
  }
}