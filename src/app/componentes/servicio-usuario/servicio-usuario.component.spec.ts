import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioUsuarioComponent } from './servicio-usuario.component';

describe('ServicioUsuarioComponent', () => {
  let component: ServicioUsuarioComponent;
  let fixture: ComponentFixture<ServicioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
