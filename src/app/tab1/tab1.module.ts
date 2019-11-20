import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { MoviePageComponent } from './movie-page/movie-page.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: Tab1Page,
      },
      { path: 'movie', component: MoviePageComponent },
      { path: 'movie/:movie', component: MoviePageComponent },
    ]),
  ],
  declarations: [Tab1Page, MoviePageComponent],
})
export class Tab1PageModule {}
