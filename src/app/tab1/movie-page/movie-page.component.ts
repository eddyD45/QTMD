import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import { Observable } from 'rxjs';
import { MovieModel } from '../../models/movie.model';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  public movieUrl: string;
  public movie$: Observable<MovieModel>;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.movieUrl = this.route.snapshot.params.movie;
  }

  ngOnInit() {
    this.movie$ = this.movieService
      .getMovieInfo()
      .pipe(map(movies => movies.find(movie => movie.Url === this.movieUrl)));
  }
}
