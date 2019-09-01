import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: './favorites/favorites.module#FavoritesPageModule'
          },
          // {
          //   path: ':placeId',
          //   loadChildren:
          //     './discover/place-detail/place-detail.module#PlaceDetailPageModule'
          // }
        ]
      },
      {
        path: 'library',
        children: [
          {
            path: '',
            loadChildren: './library/library.module#LibraryPageModule'
          },
  //         {
  //           path: 'new',
  //           loadChildren:
  //             './offers/new-offer/new-offer.module#NewOfferPageModule'
  //         },
  //         {
  //           path: 'edit/:placeId',
  //           loadChildren:
  //             './offers/edit-offer/edit-offer.module#EditOfferPageModule'
  //         }
         ]
       },
  //     {
  //       path: '',
  //       redirectTo: '/places/tabs/discover',
  //       pathMatch: 'full'
  //     }
     ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
