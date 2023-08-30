import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INFT } from 'src/app/models/inft';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class NftService {
  baseUrl = 'http://localhost:8000/api/n_f_ts';
  private nftsSubject = new BehaviorSubject<INFT[] | undefined>(undefined);

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

  editNft(id: number, updatedData: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/merge-patch+json'
    );
    return this.http
      .patch<INFT>(`${this.baseUrl}/${id}`, updatedData, { headers })
      .pipe(
        tap(() => {
          const updatedNfts = this.nftsSubject.value?.map((nft) =>
            nft.id === id ? { ...nft, ...updatedData } : nft
          );
          this.nftsSubject.next(updatedNfts);
        })
      );
  }

  createNft(newNft: FormGroup): Observable<any> {
    return this.http.post<INFT>(`${this.baseUrl}`, newNft.getRawValue());
  }
}
