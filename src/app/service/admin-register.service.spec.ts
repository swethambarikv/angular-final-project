import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AdminRegisterService } from './admin-register.service';

describe('AdminRegisterService', () => {
  let service: AdminRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AdminRegisterService
      );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
