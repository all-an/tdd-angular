import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${DataService.prototype.isToday} Deve retornar true`, () => {
    const resposta = service.isToday(new Date());
    expect(resposta).toEqual(true);
  });

  const dateOne = new Date('2021-05-10')
  it(`#${DataService.prototype.isToday} Deve retornar false`, () => {
    expect(service.isToday(dateOne)).toBe(false);
  });
});
