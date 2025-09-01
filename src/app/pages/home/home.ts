import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtisanService } from '../../artisan.service'; // Correction du chemin d'accès

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  // Liste de tous les artisans
  artisans: any[] = [];
  // Liste des artisans "top" qui seront affichés sur la page d'accueil
  artisansDuMois: any[] = [];

  // Injection du service ArtisanService via le constructeur
  constructor(private artisanService: ArtisanService) { }

  ngOnInit(): void {
    // Appelle le service pour obtenir la liste des artisans
    this.artisanService.getArtisans().subscribe((data: any[]) => {
      // Stocke toutes les données des artisans
      this.artisans = data;
      // Filtre les artisans pour ne garder que ceux qui ont la propriété 'top' à 'true'
      this.artisansDuMois = data.filter((artisan: any) => artisan.top === true);
    });
  }
}