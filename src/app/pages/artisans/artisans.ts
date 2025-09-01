import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtisanService } from '../../artisan.service'; // Correction du chemin

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './artisans.html',
  styleUrls: ['./artisans.scss'],
})
export class Artisans implements OnInit {
  // Tableau contenant tous les artisans bruts
  allArtisans: any[] = [];
  // Tableau contenant les artisans filtrés (pour l'affichage)
  filteredArtisans: any[] = [];

  // Injection des services ActivatedRoute et ArtisanService via le constructeur
  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) { }

  ngOnInit(): void {
    // Étape 1 : Récupération des données des artisans
    this.artisanService.getArtisans().subscribe(data => {
      this.allArtisans = data;

      // Étape 2 : Abonnement aux changements de paramètres dans l'URL
      // Cela permet de filtrer les artisans en fonction de l'URL
      this.route.paramMap.subscribe(params => {
        const category = params.get('category');

        this.route.queryParamMap.subscribe(queryParams => {
          const searchTerm = queryParams.get('q');
          // Appel de la fonction de filtrage avec les paramètres de l'URL
          this.filterArtisans(category, searchTerm);
        });
      });
    });
  }

  // Méthode pour filtrer les artisans selon la catégorie et le terme de recherche
  filterArtisans(category: string | null, searchTerm: string | null): void {
    // Utilise une copie temporaire pour les filtrages successifs
    let tempArtisans = this.allArtisans;
    
    // Si une catégorie est présente dans l'URL, on filtre par catégorie
    if (category) {
      tempArtisans = tempArtisans.filter(artisan =>
        artisan.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Si un terme de recherche est présent, on filtre par nom, spécialité ou ville
    if (searchTerm) {
      this.filteredArtisans = tempArtisans.filter(artisan =>
        artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // Si aucun terme de recherche, on affiche les résultats du filtre par catégorie
      this.filteredArtisans = tempArtisans;
    }
  }
}