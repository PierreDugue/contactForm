import { TestBed, inject } from '@angular/core/testing';

import { AccessDatasService } from './access-datas.service';

describe('AccessDatasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessDatasService]
    });
  });

  it('should be created', inject([AccessDatasService], (service: AccessDatasService) => {
    expect(service).toBeTruthy();
  }));
});
