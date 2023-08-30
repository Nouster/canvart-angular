import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrytpoCompareService {
  ethToEuro =
    'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR&api_key=96619352948ca57b620b04442b108106f635c5c0731e10d8a4ae45571d4fc32f';

  constructor(private http: HttpClient) {}

  getEth(): Observable<any> {
    const url =
      'https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=EUR&limit=7&api_key=96619352948ca57b620b04442b108106f635c5c0731e10d8a4ae45571d4fc32f';
    return this.http.get(url);
  }

  getEthToEuro(): Observable<any> {
    return this.http.get(this.ethToEuro);
  }
}
