import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtisanService } from '../../artisan.service';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './artisans.html',
  styleUrls: ['./artisans.scss'],
})
export class Artisans implements OnInit {
  allArtisans: any[] = [];
  filteredArtisans: any[] = [];

  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => {
      this.allArtisans = data;

      // Écoute à la fois les paramètres de l'URL (:category) et les paramètres de requête (?q=)
      this.route.paramMap.subscribe(params => {
        const category = params.get('category');
        this.route.queryParamMap.subscribe(queryParams => {
          const searchTerm = queryParams.get('q');
          this.filterArtisans(category, searchTerm);
        });
      });
    });
  }

  filterArtisans(category: string | null, searchTerm: string | null): void {
    let tempArtisans = this.allArtisans;
    
    // Filtre par catégorie si une catégorie est spécifiée
    if (category) {
      tempArtisans = tempArtisans.filter(artisan =>
        artisan.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filtre par terme de recherche si un terme est spécifié
    if (searchTerm) {
      this.filteredArtisans = tempArtisans.filter(artisan =>
        artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredArtisans = tempArtisans;
    }
  }
}