import { Component, Inject } from '@angular/core';
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
export class HomeComponent {
  artisansDuMois: any[] = [];
  artisans: any[] = [];
  constructor(@Inject(ArtisanService) private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe((data: any[]) => {
      this.artisans = data;
      this.artisansDuMois = data.filter((artisan: any) => artisan.top === true);
    });
  }
}