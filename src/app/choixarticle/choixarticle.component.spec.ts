import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixarticleComponent } from './choixarticle.component';

describe('ChoixarticleComponent', () => {
  let component: ChoixarticleComponent;
  let fixture: ComponentFixture<ChoixarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
