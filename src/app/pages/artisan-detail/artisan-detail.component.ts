import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtisanService } from '../../artisan.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artisan-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.scss']
})
export class ArtisanDetailComponent implements OnInit {
  artisan: any;
  contactForm = {
    name: '',
    subject: '',
    message: ''
  };

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) { }

  ngOnInit(): void {
    const artisanId = this.route.snapshot.paramMap.get('id');

    this.artisanService.getArtisans().subscribe(data => {
      // Correction ici : Conversion de la chaîne de caractères en nombre
      this.artisan = data.find((a: any) => a.id === Number(artisanId));
    });
  }

  submitForm(): void {
    const artisanId = this.route.snapshot.paramMap.get('id');

    // Assurez-vous que l'ID est un nombre avant de le comparer
    this.artisanService.getArtisans().subscribe((data: any[]) => {
      this.artisan = data.find((a: any) => a.id === Number(artisanId));
    });
  }
}