import { RatingModel } from './rating.model';

export interface MovieModel {
  Title: string;
  Url: string;
  Year: number;
  ReleaseDate: string;
  Runtime: string;
  Genre: string;
  Actors: string;
  Plot: string;
  Ratings: Array<RatingModel>;
}
