export interface MovieAssets {
  image: { cartel: string; wallpaper: string };
  name: string;
  schedule: string[];
  clasification: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
  lengthTime: string;
  synopsis: string;
  director: string;
  releaseYear: string;
}
