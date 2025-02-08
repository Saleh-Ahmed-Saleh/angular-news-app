import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SportsNewsComponent } from './pages/sports-news/sports-news.component';
import { TechNewsComponent } from './pages/tech-news/tech-news.component';
import { BusinessComponent } from './pages/business/business.component';
import { HealthComponent } from './pages/health/health.component';
import { ScienceComponent } from './pages/science/science.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'sports',
    loadComponent: () =>
      import('./pages/sports-news/sports-news.component').then(
        (c) => c.SportsNewsComponent
      ),
  },
  {
    path: 'technology',
    loadComponent: () =>
      import('./pages/tech-news/tech-news.component').then(
        (c) => c.TechNewsComponent
      ),
  },
  {
    path: 'business',
    loadComponent: () =>
      import('./pages/business/business.component').then(
        (c) => c.BusinessComponent
      ),
  },
  {
    path: 'health',
    loadComponent: () =>
      import('./pages/health/health.component').then((c) => c.HealthComponent),
  },
  {
    path: 'science',
    loadComponent: () =>
      import('./pages/science/science.component').then(
        (c) => c.ScienceComponent
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];
