import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INFT } from 'src/app/models/inft';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NftService {
  baseUrl = 'http://localhost:8000/api/n_f_ts';
  private nftsSubject = new BehaviorSubject<INFT[] | undefined>(undefined);
  nfts$ = this.nftsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllNFT(): Observable<any> {
    return this.http.get<INFT[]>(this.baseUrl);
  }

  getNft(id: number): Observable<any> {
    return this.http.get<INFT>(`${this.baseUrl}/${id}`);
  }

  dropNft(id: number): Observable<any> {
    return this.http.delete<INFT>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        const updatedNfts = this.nftsSubject.value?.filter(
          (nft) => nft.id !== id
        );
        this.nftsSubject.next(updatedNfts);
      })
    );
  }
}
