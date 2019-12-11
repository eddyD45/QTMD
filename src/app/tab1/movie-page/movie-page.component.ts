import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import { Observable } from 'rxjs';
import { MovieModel } from '../../models/movie.model';
import { map, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { RatingModel } from '../../models/rating.model';
import { QuoteModel } from '../../models/quote.model';

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
    this.movie$ = this.movieService
      .getMovieInfo()
      .pipe(map(movies => movies.find(movie => movie.Url === this.movieUrl)));
  }

  public getSafeUrl(url: string) {
    return this.sanitationService.bypassSecurityTrustResourceUrl(url);
  }

  public getRatingFromSource(
    ratings: Array<RatingModel>,
    source: string
  ): string {
    return ratings.find(rating => rating.Source === source).Value;
  }

  public get3RandomQuotes(quotes: Array<QuoteModel>): Array<QuoteModel> {
    const arr = [];
    while (arr.length < 3) {
      const r = Math.floor(Math.random() * quotes.length);
      if (arr.indexOf(r) === -1) {
        arr.push(r);
      }
    }
    return arr.map(randomNumber => {
      return quotes[randomNumber];
    });
  }
}
