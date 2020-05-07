import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('MyServiceService', () => {

    let injector: TestBed;
    let service: HttpService;
    let httpMock: HttpTestingController;

    const mockResponse = {
        data: [
            {
                "id": 1,
                "name": "Mario Bros 2",
                "description": "The new nintendo adventure",
                "ageRestriction": 13,
                "company": "Nintendo",
                "price": 9.99
            },
            {
                "id": 2,
                "name": "Castlevania",
                "description": "Vampire hunter game",
                "ageRestriction": 13,
                "company": "Konami",
                "price": 5.99
            },
            {
                "id": 3,
                "name": "Lego car",
                "description": "Make your own car with legos",
                "ageRestriction": 5,
                "company": "Lego",
                "price": 10.99
            }
        ]
    };


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService]
        });

        injector = getTestBed();
        service = injector.get(HttpService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('get() should return data', () => {
        service.get().subscribe((res) => {
          expect(res).toEqual(mockResponse);
        });
    
        const req = httpMock.expectOne('http://localhost:5000/api/products');
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
      });     
});