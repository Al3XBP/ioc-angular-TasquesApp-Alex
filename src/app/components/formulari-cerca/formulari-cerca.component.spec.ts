import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariCercaComponent } from './formulari-cerca.component';

describe('FormulariCercaComponent', () => {
  let component: FormulariCercaComponent;
  let fixture: ComponentFixture<FormulariCercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariCercaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariCercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
