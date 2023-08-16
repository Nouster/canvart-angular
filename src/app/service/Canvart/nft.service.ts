import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INFT } from 'src/app/models/inft';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NftService {
  baseUrl = 'http://localhost:8000/api/n_f_ts';

  constructor(private http: HttpClient) {}

  getAllNFT(): Observable<any> {
    return this.http.get<INFT[]>(this.baseUrl);
  }

  getNft(id: number): Observable<any> {
    return this.http.get<INFT>(`${this.baseUrl}/${id}`);
  }
}
