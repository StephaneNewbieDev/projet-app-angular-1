import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService } from '../../artisan.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  artisansDuMois: any[] = []; // Cette propriété contiendra les artisans filtrés

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => {
      // Tri des artisans par note décroissante
      const sortedArtisans = data.sort((a: any, b: any) => b.note - a.note);
      
      // Sélection des 3 premiers artisans les mieux notés
      this.artisansDuMois = sortedArtisans.slice(0, 3);
    });
  }
}