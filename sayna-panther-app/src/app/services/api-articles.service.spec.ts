import { TestBed } from '@angular/core/testing';

import { ApiArticlesService } from './api-articles.service';

describe('ApiArticlesService', () => {
  let service: ApiArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
