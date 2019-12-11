import { Component } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { Observable } from 'rxjs';
import { MovieModel } from '../models/movie.model';
import { QuoteModel } from '../models/quote.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public movies$: Observable<
    Array<MovieModel>
  > = this.movieService.getMovieInfo();

  public chosenMovies: Array<string> = [];

  public quote: QuoteModel;
  public movieQuoted: MovieModel;

  constructor(private movieService: MovieService) {}

  public updateMovieList(e: CustomEvent, movieTitle: string) {
    e.detail.checked
      ? this.chosenMovies.push(movieTitle)
      : (this.chosenMovies = this.chosenMovies.filter(
          title => title !== movieTitle
        ));
  }

  public generateQuote(movies: Array<MovieModel>) {
    const movieTitle = this.chosenMovies[
      Math.floor(Math.random() * this.chosenMovies.length)
    ];

    this.movieQuoted = movies.find(movie => movie.Title === movieTitle);

    this.quote = this.movieQuoted.Quotes[
      Math.floor(Math.random() * this.movieQuoted.Quotes.length)
    ];
  }
}
