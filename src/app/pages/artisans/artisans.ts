import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisans',
  standalone: false,
  templateUrl: './artisans.html',
  styleUrls: ['./artisans.scss']
})

export class ArtisansComponent {
  artisans = [
    { id: 1, name: 'Jean Dupont', specialty: 'Menuisier', note: 4.5, location: 'Paris' },
    { id: 2, name: 'Marie Martin', specialty: 'Plombier', note: 4.8, location: 'Lyon' },
    { id: 3, name: 'Paul Durand', specialty: 'Électricien', note: 4.2, location: 'Marseille' }
  ];
  
  filteredArtisans = this.artisans;
  searchTerm = '';    
}
