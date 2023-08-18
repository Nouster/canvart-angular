import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrytpoCompareService {
  constructor(private http: HttpClient) {}

  getEth(): Observable<any> {
    const url =
      'https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=EUR&limit=7';
    return this.http.get(url);
  }
}
