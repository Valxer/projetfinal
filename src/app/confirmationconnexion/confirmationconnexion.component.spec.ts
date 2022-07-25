import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationconnexionComponent } from './confirmationconnexion.component';

describe('ConfirmationconnexionComponent', () => {
  let component: ConfirmationconnexionComponent;
  let fixture: ComponentFixture<ConfirmationconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationconnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
