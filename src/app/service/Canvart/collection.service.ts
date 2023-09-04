import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICollectionNFT } from 'src/app/models/icollection-nft';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  baseUrl = 'http://localhost:8000/api/collection_n_f_ts';

  constructor(private http: HttpClient) {}

  getAllCollections(): Observable<any> {
    return this.http.get<ICollectionNFT[]>(this.baseUrl);
  }
}
