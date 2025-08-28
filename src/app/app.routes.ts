import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ArtisansComponent } from './pages/artisans/artisans';
import { ArtisanDetailComponent } from './pages/artisan-detail/artisan-detail';
import { LegalComponent } from './pages/legal/legal';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisans', component: ArtisansComponent },
  { path: 'artisan/:id', component: ArtisanDetailComponent },
  { path: 'legal', component: LegalComponent },
  { path: '**', component: PageNotFoundComponent }
];