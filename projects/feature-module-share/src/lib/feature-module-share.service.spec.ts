import { TestBed } from '@angular/core/testing';

import { FeatureModuleShareService } from './feature-module-share.service';

describe('FeatureModuleShareService', () => {
  let service: FeatureModuleShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureModuleShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
