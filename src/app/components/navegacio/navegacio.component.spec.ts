import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacioComponent } from './navegacio.component';

describe('NavegacioComponent', () => {
  let component: NavegacioComponent;
  let fixture: ComponentFixture<NavegacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
