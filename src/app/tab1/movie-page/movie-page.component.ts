import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import { Observable } from 'rxjs';
import { MovieModel } from '../../models/movie.model';
import { map, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

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
    private movieService: MovieService,
    private sanitationService: DomSanitizer
  ) {
    this.movieUrl = this.route.snapshot.params.movie;
  }

  ngOnInit() {
    console.log(this.movieUrl);
    this.movie$ = this.movieService.getMovieInfo().pipe(
      map(
        movies => movies.find(movie => movie.Url === this.movieUrl)
        // map((movie: MovieModel) =>
        //   this.sanitationService.bypassSecurityTrustUrl(
        //     movie.YouTubePlaylistUrl
        //   )
        // )
      )
    );
  }

  public getSafeUrl(url: string) {
    return this.sanitationService.bypassSecurityTrustResourceUrl(url);
  }
}
