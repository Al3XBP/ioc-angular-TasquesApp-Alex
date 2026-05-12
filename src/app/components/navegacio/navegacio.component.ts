import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';

@Component({
  selector: 'app-navegacio',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navegacio.component.html',
  styleUrl: './navegacio.component.scss'
})
export class NavegacioComponent {
  usuari$;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
	this.usuari$ = this.authService.obtenirUsuari();
    }

  tancarSessio(): void {
    this.authService.logout();
    this.router.navigate(['/cataleg']);
  }
}