import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'favorites', pathMatch: 'full' },
  { path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)},
  { path: 'library', loadChildren: './library/library.module#LibraryPageModule' },
  { path: 'quotes', loadChildren: './quotes/quotes.module#QuotesPageModule' },
  { path: 'quote', loadChildren: './quote/quote.module#QuotePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
