import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationinscriptionComponent } from './confirmationinscription.component';

describe('ConfirmationinscriptionComponent', () => {
  let component: ConfirmationinscriptionComponent;
  let fixture: ComponentFixture<ConfirmationinscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationinscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
