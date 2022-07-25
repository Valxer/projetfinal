import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurconnexionComponent } from './erreurconnexion.component';

describe('ErreurconnexionComponent', () => {
  let component: ErreurconnexionComponent;
  let fixture: ComponentFixture<ErreurconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErreurconnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErreurconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
