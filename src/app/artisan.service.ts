import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private dataUrl = 'assets/datas.json';

  constructor(private http: HttpClient) { }

  getArtisans(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}