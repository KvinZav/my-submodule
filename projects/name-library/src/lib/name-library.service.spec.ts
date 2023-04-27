import { TestBed } from '@angular/core/testing';

import { NameLibraryService } from './name-library.service';

describe('NameLibraryService', () => {
  let service: NameLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
