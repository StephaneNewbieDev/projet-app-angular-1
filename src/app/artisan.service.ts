import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  private artisansUrl = 'assets/datas.json'; // Le chemin vers ton fichier JSON

  constructor(private http: HttpClient) { }

  /**
   * Méthode pour récupérer la liste des artisans à partir du fichier JSON.
   */
  getArtisans(): Observable<any[]> {
    return this.http.get<any[]>(this.artisansUrl);
  }
}