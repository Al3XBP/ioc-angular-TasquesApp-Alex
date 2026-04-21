import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, of, switchMap, timer } from 'rxjs';
import { ElementApiResponse } from '../../models/element.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss'
})
export class FormulariCercaComponent implements OnInit {
  @Output() cercaCanviada = new EventEmitter<string>();

  private http = inject(HttpClient);

  formulari = new FormGroup({
    termeCerca: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.minLength(2),
        Validators.maxLength(50)
      ],
      asyncValidators: [this.codiDisponibleValidator()],
      updateOn: 'change'
    })
  });

  get termeCercaControl(): FormControl<string> {
    return this.formulari.get('termeCerca') as FormControl<string>;
  }

  ngOnInit(): void {
  this.termeCercaControl.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe((valor) => {
      const text = valor.trim();

      if (text === '') {
        this.cercaCanviada.emit('');
        return;
      }

      if (text.length < 2 || text.length > 50) {
        return;
      }

      this.cercaCanviada.emit(text);
    });
}

  netejar(): void {
    this.termeCercaControl.setValue('');
    this.termeCercaControl.markAsUntouched();
    this.cercaCanviada.emit('');
  }

  private codiDisponibleValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const valor = (control.value || '').trim();

      if (valor === '' || valor.length < 2 || valor.length > 50) {
        return of(null);
      }

      return timer(500).pipe(
        switchMap(() =>
          this.http.get<ElementApiResponse[]>(
            `${environment.apiUrl}/elements?nom_like=${valor}`
          )
        ),
        map((resultats) => {
          return resultats.length > 0 ? null : { senseResultats: true };
        })
      );
    };
  }
}