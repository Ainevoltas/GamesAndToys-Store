import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:5000/api/products';

  constructor(private httpService: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public get() {
    // Get all products data
    return this.httpService.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(payload) {
    return this.httpService.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload) {
    return this.httpService.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload) {
    return this.httpService.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
  }
}
