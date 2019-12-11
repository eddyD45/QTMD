import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieModel } from '../../models/movie.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  public getMovieInfo(): Observable<Array<MovieModel>> {
    return this.httpClient.get<any>('../../../assets/data/movies.json').pipe(
      // tap(val => console.log(val)),
      map(movies => movies.Movies)
    );
  }
}
