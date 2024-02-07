import { Injectable } from '@angular/core';
import { MovieAssets } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  private movieAssets: MovieAssets[] = [
    {
      image: {
        cartel: 'assets/movies/cartel/AllQuietOnWestern.webp',
        wallpaper: 'assets/movies/wallpaper/AllQuietOnWestern.webp',
      },
      name: 'All Quiet On The Western Front',
      schedule: ['13:00', '14:30', '16:00', '17:30', '19:00'],
      clasification: 'R',
      lengthTime: '148min',
      synopsis:
        "A young German soldier's terrifying experiences and distress on the western front during World War I.",
      director: 'Edward Berger',
      releaseYear: '2022',
    },
    {
      image: {
        cartel: 'assets/movies/cartel/EverythingEverywhere.webp',
        wallpaper: 'assets/movies/wallpaper/EverythingEverywhere.webp',
      },
      name: 'Everything Everywhere All At Once',
      schedule: ['13:15', '14:45', '15:30', '17:00'],
      clasification: 'R',
      lengthTime: '139min',
      synopsis:
        'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
      director: 'Daniel Kwan - Daniel Scheinert',
      releaseYear: '2022',
    },
    {
      image: {
        cartel: 'assets/movies/cartel/Oppenheimer.webp',
        wallpaper: 'assets/movies/wallpaper/Oppenheimer.webp',
      },
      name: 'Oppenheimer',
      schedule: ['13:15', '14:45', '15:30', '17:00'],
      clasification: 'R',
      lengthTime: '180min',
      synopsis:
        'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
      director: 'Christopher Nolan',
      releaseYear: '2023',
    },
    {
      image: {
        cartel: 'assets/movies/cartel/PoorThings.webp',
        wallpaper: 'assets/movies/wallpaper/PoorThings.webp',
      },
      name: 'Poor Things',
      schedule: ['13:15', '14:45', '15:30', '17:00'],
      clasification: 'R',
      lengthTime: '141min',
      synopsis:
        'The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.',
      director: 'Yorgos Lanthimos',
      releaseYear: '2023',
    },
    {
      image: {
        cartel: 'assets/movies/cartel/SociedadNieve.webp',
        wallpaper: 'assets/movies/wallpaper/SociedadNieve.webp',
      },
      name: 'Society of the Snow',
      schedule: ['13:15', '14:45', '15:30', '17:00'],
      clasification: 'R',
      lengthTime: '144min',
      synopsis:
        "The flight of a rugby team crashes on a glacier in the Andes. The few passengers who survive the crash find themselves in one of the world's toughest environments to survive.",
      director: 'J.A. Bayona',
      releaseYear: '2023',
    },
    {
      image: {
        cartel: 'assets/movies/cartel/SpiderManAcross.webp',
        wallpaper: 'assets/movies/wallpaper/SpiderManAcross.webp',
      },
      name: 'Spider-Man: Across the Spider-Verse',
      schedule: ['13:15', '14:45', '15:30', '17:00'],
      clasification: 'PG',
      lengthTime: '140min',
      synopsis:
        'Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.',
      director: 'Joaquim Dos Santos',
      releaseYear: '2023',
    },
    {
      image: {
        cartel: 'assets/movies/cartel/TheHunt.webp',
        wallpaper: 'assets/movies/wallpaper/TheHunt.webp',
      },
      name: 'The Hunt',
      schedule: ['13:15', '14:45', '15:30', '17:00'],
      clasification: 'R',
      lengthTime: '115min',
      synopsis:
        "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
      director: 'Thomas Vinterberg',
      releaseYear: '2012',
    },
    {
      image: {
        cartel: 'assets/movies/cartel/TheInnocents.webp',
        wallpaper: 'assets/movies/wallpaper/TheInnocents.webp',
      },
      name: 'The Innocents',
      schedule: ['13:15', '14:45', '15:30', '17:00'],
      clasification: 'R',
      lengthTime: '117min',
      synopsis:
        "During the bright Nordic summer, a group of children reveal their dark and mysterious powers when the adults aren't looking. In this original and gripping supernatural thriller, playtime takes a dangerous turn.",
      director: 'Eskil Vogt',
      releaseYear: '2021',
    },
    {
      image: {
        cartel: 'assets/movies/cartel/TheKiller.webp',
        wallpaper: 'assets/movies/wallpaper/TheKiller.webp',
      },
      name: 'The Killer',
      schedule: ['13:15', '14:45', '15:30', '17:00'],
      clasification: 'R',
      lengthTime: '118min',
      synopsis:
        "After a fateful near-miss, an assassin battles his employers and himself, on an international manhunt he insists isn't personal.",
      director: 'David Fincher',
      releaseYear: '2023',
    },
    {
      image: {
        cartel: 'assets/movies/cartel/TheWhale.webp',
        wallpaper: 'assets/movies/wallpaper/TheWhale.webp',
      },
      name: 'The Whale',
      schedule: ['13:15', '14:45', '15:30', '17:00'],
      clasification: 'R',
      lengthTime: '117min',
      synopsis:
        'A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter.',
      director: 'Darren Aronofsky',
      releaseYear: '2022',
    },
  ];

  getMovies(): MovieAssets[] {
    return this.movieAssets;
  }

  getMovie(index: number): MovieAssets {
    if (index > this.movieAssets.length - 1 || index < 0) {
      return this.movieAssets[0];
    }
    return this.movieAssets[index];
  }
}
