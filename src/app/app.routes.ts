import { Routes } from '@angular/router';
import { CatalegComponent } from './pages/cataleg/cataleg.component';
import { CercaComponent } from './pages/cerca/cerca.component';
import { DetallComponent } from './pages/detall/detall.component';
import { PreferitsComponent } from './pages/preferits/preferits.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cataleg', pathMatch: 'full' },
  { path: 'cataleg', component: CatalegComponent },
  { path: 'cerca', component: CercaComponent },
  { path: 'detall/:id', component: DetallComponent },
  { path: 'preferits', component: PreferitsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'cataleg' }
];