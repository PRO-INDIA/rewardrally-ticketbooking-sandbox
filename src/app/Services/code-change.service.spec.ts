import { TestBed } from '@angular/core/testing';

import { CodeChangeService } from './code-change.service';

describe('CodeChangeService', () => {
  let service: CodeChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
