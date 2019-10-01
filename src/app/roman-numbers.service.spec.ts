import { TestBed, inject } from '@angular/core/testing';

import { RomanNumbersService } from './roman-numbers.service';

describe('RomanNumbersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RomanNumbersService]
    });
  });

  it('should be created', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service).toBeTruthy();
  }));

  it('1 debe ser igual a I', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(1)).toEqual('I');
  }));

  it('2 debe ser igual a II', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(2)).toEqual('II');
  }));

  it('3 debe ser igual a III', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(3)).toEqual('III');
  }));

  it('4 debe ser igual a IV', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(4)).toEqual('IV');
  }));

  it('5 debe ser igual a V', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(5)).toEqual('V');
  }));

  it('6 debe ser igual a VI', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(6)).toEqual('VI');
  }));

  it('7 debe ser igual a VII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(7)).toEqual('VII');
  }));

  it('8 debe ser igual a VIII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(8)).toEqual('VIII');
  }));

});
