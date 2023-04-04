import { TestBed } from '@angular/core/testing';

import { MissionlistService } from './missionlist.service';

describe('MissionlistService', () => {
  let service: MissionlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
