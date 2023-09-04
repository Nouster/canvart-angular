import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  baseUrl = 'http://localhost:8000/api/collection_n_f_ts';

  constructor(private http: HttpClient) {}
}
