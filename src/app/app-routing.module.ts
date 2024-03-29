import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurant-list',
    pathMatch: 'full'
  },
  {
    path: 'restaurant-list',
    loadChildren: () => import('./pages/restaurant-list/restaurant-list.module').then( m => m.RestaurantListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
