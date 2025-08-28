import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule pour *ngFor
import { ActivatedRoute, RouterLink } from '@angular/router'; // Importe RouterLink pour les liens de routage
import { ArtisanService } from '../../artisan.service';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [CommonModule, RouterLink], // Ajoute les modules ici
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
      // Écoute les changements dans les paramètres d'URL pour filtrer
      this.route.paramMap.subscribe(params => {
        const category = params.get('category');
        this.filterByCategory(category);
      });
    });
  }

  filterByCategory(category: string | null): void {
    if (category) {
      this.filteredArtisans = this.allArtisans.filter(artisan =>
        artisan.category.toLowerCase() === category.toLowerCase()
      );
    } else {
      this.filteredArtisans = this.allArtisans;
    }
  }
}