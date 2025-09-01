import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Artisans } from './pages/artisans/artisans';
import { ArtisanDetailComponent } from './pages/artisan-detail/artisan-detail.component';
import { LegalComponent } from './pages/legal/legal';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  // Route pour la page d'accueil
  { path: '', component: HomeComponent },

  // Route pour la liste des artisans
  { path: 'artisans', component: Artisans },

  { path: 'artisans/:category', component: Artisans },

  // Route pour la page de détail d'un artisan (avec un paramètre 'id')
  { path: 'artisan/:id', component: ArtisanDetailComponent },

  // Route pour la page des mentions légales
  { path: 'legal', component: LegalComponent },

  // Route joker pour gérer les pages non trouvées
  { path: '**', component: PageNotFoundComponent }
];