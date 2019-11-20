import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'sections',
    component: TabsPage,
    children: [
      {
        path: 'movie-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule),
          },
        ],
      },
      {
        path: 'quote-generator',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule),
          },
        ],
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/sections/movie-list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/sections/movie-list',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   redirectTo: '/sections/movie-list',
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
