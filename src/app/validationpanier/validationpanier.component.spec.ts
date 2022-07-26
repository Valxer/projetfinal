import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationpanierComponent } from './validationpanier.component';

describe('ValidationpanierComponent', () => {
  let component: ValidationpanierComponent;
  let fixture: ComponentFixture<ValidationpanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationpanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationpanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
