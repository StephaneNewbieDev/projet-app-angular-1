import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  
  constructor(private router: Router) {}

  search(term: string): void {
    if (term) {
      this.router.navigate(['/artisans'], { queryParams: { q: term } });
    } else {
      this.router.navigate(['/artisans']);
    }
  }
}