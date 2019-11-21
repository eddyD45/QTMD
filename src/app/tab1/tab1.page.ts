import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { Observable } from 'rxjs';
import { MovieModel } from '../models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public movies$: Observable<Array<MovieModel>>;
  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movies$ = this.movieService
      .getMovieInfo()
      .pipe(tap(val => console.log(val)));
  }

  public onClickVisitMoviePage(url: string): void {
    this.router
      .navigate(['/sections/movie-list/movie', url])
      .catch(error => console.log(error));
  }
}
