import { TestBed } from '@angular/core/testing';

import { NgxCircularMenuService } from './ngx-circular-menu.service';

describe('NgxCircularMenuService', () => {
  let service: NgxCircularMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCircularMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
