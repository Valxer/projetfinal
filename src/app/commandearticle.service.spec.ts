import { TestBed } from '@angular/core/testing';

import { CommandearticleService } from './commandearticle.service';

describe('CommandearticleService', () => {
  let service: CommandearticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandearticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
