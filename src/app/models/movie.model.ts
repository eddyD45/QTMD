import { RatingModel } from './rating.model';
import { CastModel } from './cast.model';
import { QuoteModel } from './quote.model';

export interface MovieModel {
  Title: string;
  Url: string;
  Year: number;
  ReleaseDate: string;
  Runtime: string;
  Genre: string;
  Cast: Array<CastModel>;
  Plot: string;
  Ratings: Array<RatingModel>;
  Quotes: Array<QuoteModel>;
}
