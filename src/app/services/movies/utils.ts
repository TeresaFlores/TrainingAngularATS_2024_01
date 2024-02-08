export type Seat = {
  number: number;
  available: boolean;
  selected: boolean;
  paired: boolean;
};

export type SeatRows = {
  letter: string;
  seats: Seat[];
};

export type FormattedDate = {
  date: Date;
  formatted: string;
  isActive: boolean;
};

export type ScreeningDate = { date: Date; time: string };
export type ScreeningTimeByLocation = {
  location: string;
  day: string;
  movieFormat: string;
  dates: ScreeningDate[];
  screen: string;
  seatRows: SeatRows[];
};

export type ShowTime = {
  date: Date;
  movieFormat: string;
  location: string;
  screen: string;
  seatRows: SeatRows[];
};

export type TicketType = 'adult' | 'child' | 'senior';
export type Ticket = {
  type: TicketType;
  price: number;
};
export type TicketsPrices = {
  adult: number;
  child: number;
  senior: number;
};

export type Movie = {
  name: string;
  description: string;
  status: 'released' | 'upcoming';
  media: {
    poster: string;
    images: string[];
    trailer: string;
  };
  meta: {
    genre: string;
    director: string;
    cast: string;
    rating: string;
    length: string;
    releaseDate: string;
  };
  showTimes: ShowTime[];
  ticketsPrices: TicketsPrices;
};

export type SelectedScreening = {
  screening: ScreeningTimeByLocation;
  screeningDate: ScreeningDate;
};

export type SelectedSeat = {
  rowLetter: string;
  seatNumber: number;
};

export type SelectedTickets = {
  adult: number;
  child: number;
  senior: number;
};

const seatsStructure = [
  { letter: 'a', quantity: 11 },
  { letter: 'b', quantity: 11 },
  { letter: 'c', quantity: 8 },
  { letter: 'd', quantity: 9 },
  { letter: 'e', quantity: 9 },
  { letter: 'f', quantity: 10 },
  { letter: 'g', quantity: 12 },
];

const generateSeats = (): SeatRows[] => {
  const cinemaSeats: SeatRows[] = [];
  for (const row of seatsStructure) {
    const { letter, quantity } = row;
    const seats: Seat[] = [];
    let previousSeatUnavailable = false;
    for (let i = 1; i <= quantity; i++) {
      let available = Math.random() < 0.8; // 80% probability of being available
      if (quantity % 2 === 0 && previousSeatUnavailable) {
        // If quantity is even, the previous seat was unavailable, and current one is available
        // Apply 70% probability to make the current seat unavailable
        available = Math.random() < 0.2;
      }
      const paired = !(quantity % 2 === 1 && i === 1) || quantity % 2 === 0; // Logic for paired property
      seats.push({
        number: i,
        available,
        selected: false,
        paired,
      });
      previousSeatUnavailable = !available;
    }
    cinemaSeats.push({ letter, seats });
  }
  return cinemaSeats;
};

const generateMockShowTimes = (): ShowTime[] => {
  const baseDate = new Date();
  const showTimes: ShowTime[] = [];

  const locations = [
    'Galerias Monterrey',
    'Galerias Valle Oriente',
    'Punto Valle',
    'Nuevo Sur',
  ];
  const formats = ['IMAX', '2D', '3D', 'IMAX 3D'];
  const minutesOptions = [10, 15, 20, 25, 30, 45, 50];
  let minutesOptionsPool = [...minutesOptions];

  let currentDate = new Date(baseDate);

  for (let day = 5; day <= 11; day++) {
    for (let hour = 11; hour <= 22; hour += 2) {
      const randomLocation =
        locations[Math.floor(Math.random() * locations.length)];
      const randomFormat = formats[Math.floor(Math.random() * formats.length)];
      // Choose random minutes from the specified options (15, 20, 30, 45, 50)
      const randomMinutes =
        minutesOptions[Math.floor(Math.random() * minutesOptions.length)];
      // Set seconds to 0
      const seconds = 0;

      // Ensure the hour is never before 11 am and never after 11 pm
      const evenHour = (hour + day) % 12;
      const showHour = evenHour < 11 ? evenHour + 12 : evenHour;

      // Generate random screen number between 1 and 14
      const randomScreen = Math.floor(Math.random() * 14) + 1;

      const showTime: ShowTime = {
        date: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + day,
          showHour,
          randomMinutes,
          seconds
        ),
        movieFormat: randomFormat,
        location: randomLocation,
        screen: `Screen ${randomScreen}`,
        seatRows: generateSeats(),
      };

      minutesOptionsPool = minutesOptionsPool.filter(
        (number) => number !== randomMinutes
      );

      showTimes.push(showTime);

      // Check if there are already 5 or more dates with the same location on the same day
      if (
        showTimes.filter(
          (st) =>
            st.location === randomLocation &&
            st.date.getDate() === showTime.date.getDate()
        ).length > 4
      ) {
        continue; // Skip to the next iteration of the outer loop
      }

      // Add between 2 and 3 more dates with the same location and format
      const additionalDatesQuantity = Math.floor(Math.random() * 2) + 2;
      for (
        let additionalDate = 0;
        additionalDate < additionalDatesQuantity;
        additionalDate++
      ) {
        const additionalRandomHour =
          Math.floor(Math.random() * (22 - 11 + 1)) + 11;
        const additionalRandomMinutes =
          minutesOptionsPool[
            Math.floor(Math.random() * minutesOptionsPool.length)
          ];
        minutesOptionsPool = minutesOptionsPool.filter(
          (number) => number !== additionalRandomMinutes
        );

        // Generate random screen number between 1 and 14
        const randomScreen = Math.floor(Math.random() * 14) + 1;

        const additionalShowTime: ShowTime = {
          date: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + day,
            additionalRandomHour,
            additionalRandomMinutes,
            seconds
          ),
          movieFormat: randomFormat,
          location: randomLocation,
          screen: `Screen ${randomScreen}`,
          seatRows: generateSeats(),
        };
        showTimes.push(additionalShowTime);
      }

      minutesOptionsPool = minutesOptions;
    }

    minutesOptionsPool = minutesOptions;
  }
  return showTimes;
};

export const movieData: Movie[] = [
  {
    name: 'The Beekeeper',
    description:
      'In The Beekeeper, one man’s brutal campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as "Beekeepers".',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BZjQwYjU3OTYtMWVhMi00N2Y2LWEzMDgtMzViN2U4NWI1NmI3XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_FMjpg_UX1000_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/12/18/08/09/5765774.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/18/08/09/5795414.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/18/08/09/5823494.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/18/08/09/5837534.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/18/08/09/5851574.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/18/08/09/5865614.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Action, Thriller',
      director: 'David Ayer',
      cast: 'Jason Statham, Emmy Raver-Lampman, Josh Hutcherson',
      rating: 'R',
      length: '1 hr 45 min',
      releaseDate: '1/12/2024',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Aquaman and The Lost Kingdom',
    description:
      'Having failed to defeat Aquaman the first time, Black Manta, still driven by the need to avenge his father’s death, will stop at nothing to take Aquaman down once and for all. This time Black Manta is more formidable than ever before, wielding the power of the mythic Black Trident, which unleashes an ancient and malevolent force. To defeat him, Aquaman will turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance. Together, they must set aside their differences in order to protect their kingdom and save Aquaman’s family, and the world, from irreversible destruction.',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTkxM2FiYjctYjliYy00NjY2LWFmOTEtMWZiYWRjNjA4MGYxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/09/13/15/02/2100482.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/13/15/02/2067721.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/13/15/02/2033401.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/15/11/09/0886839.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/04/11/05/0090976.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/04/11/05/0061337.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Action, Adventure, Fantasy',
      director: 'James Wan',
      cast: 'Jason Momoa, Patrick Wilson, Amber Heard',
      rating: 'PG-13',
      length: '2 hr 4 min',
      releaseDate: '12/22/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Mean Girls',
    description:
      'From the comedic mind of Tina Fey comes a new twist on the modern classic, MEAN GIRLS. New student Cady Heron (Angourie Rice) is welcomed into the top of the social food chain by the elite group of popular girls called "The Plastics," ruled by the conniving queen bee Regina George (Reneé Rapp) and her minions Gretchen (Bebe Wood) and Karen (Avantika). However, when Cady makes the major misstep of falling for Regina’s ex-boyfriend Aaron Samuels (Christopher Briney), she finds herself prey in Regina’s crosshairs. As Cady sets to take down the group’s apex predator with the help of her outcast friends Janis (Auli’i Cravalho) and Damian (Jaquel Spivey), she must learn how to stay true to herself while navigating the most cutthroat jungle of all: high school.',

    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDExMGMyN2QtYjRkZC00Yzk1LTkzMDktMTliZTI5NjQ0NTNkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/12/20/09/11/4137865.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/23/15/16/5250200.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/23/15/16/5265798.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/23/15/16/5328189.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/23/15/16/5220565.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/23/15/16/5281396.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Comedy, Music',
      director: 'Samantha Jayne, Arturo Perez Jr.',
      cast: 'Angourie Rice, Reneé Rapp, Avantika Vandanapu',
      rating: 'PG-13',
      length: '1 hr 53 min',
      releaseDate: '1/12/2024',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Anyone But You',
    description:
      'In the edgy comedy Anyone But You, Bea (Sydney Sweeney) and Ben (Glen Powell) look like the perfect couple, but after an amazing first date something happens that turns their fiery hot attraction ice cold - until they find themselves unexpectedly thrust together at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BYmQ2MmY2MmYtMjUzOS00Y2MyLWE4YmQtYzIzYWQ4OTdmMGU0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/24/01/11/13/55/3674198.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/22/11/06/1531556.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/22/11/06/1650114.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/22/11/06/1957430.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/15/09/25/1267836.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/15/09/25/1250677.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Comedy, Romance',
      director: 'Will Gluck',
      cast: 'Sydney Sweeney, Glen Powell, Alexandra Shipp',
      rating: 'R',
      length: '1 hr 44 min',
      releaseDate: '12/22/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'All Of Us Strangers',
    description:
      'En un remoto pueblo, dos hermanos encuentran a un hombre infectado por el demonio a punto de dar a luz al mismísimo mal. Deciden deshacerse del hombre, pero sólo consiguen extender el caos.',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BZmYzMjMzN2EtMGYwNi00ODc3LWI3YTctMjA5YjI1MGFkYTlhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/08/24/16/06/1365471.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/08/24/16/06/1334271.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/08/24/16/06/1317111.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/08/24/16/06/1298390.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/08/24/16/06/1349871.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/22/11/25/5251228.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Drama, Romance',
      director: 'Andrew Haigh',
      cast: 'Paul Mescal, Andrew Scott, Claire Foy',
      rating: 'R',
      length: '1 hr 45 min',
      releaseDate: '12/22/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Godzilla Minus One',
    description:
      'Japan, devastated after the war, faces a new threat in the form of Godzilla. How will the country confront this impossible situation?',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BYWFjNGQ0ZGItYjkwMy00ODEzLTk3NDAtYjExYmJlNjI3ZTRmXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/09/04/20/22/2127919.png/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/04/20/22/2151319.png/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/04/20/22/2168480.png/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/04/20/22/2182520.png/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/04/20/22/2196560.png/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/04/20/25/4972945.png/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Science Fiction, Action, Adventure',
      director: 'Takashi Yamazaki',
      cast: 'Ryûnosuke Kamiki, Minami Hamabe, Yûki Yamada',
      rating: 'PG-13',
      length: '2 hr 4 min',
      releaseDate: '12/1/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Wonka',
    description:
      'An origin story that explores the vivid, mythical beginnings of the imaginative young inventor before he becomes the renowned scrumdiddlyumptious Mozart of chocolate',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzJiZGRkMDgtZWFlOS00MWRhLThhNTEtMjljZTJjYTljYTBjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/12/08/11/34/1413710.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/10/06/15/27/4734858.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/08/11/33/5453370.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/08/11/33/5493928.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/08/11/33/5509527.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/08/11/33/5525126.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Adventure, Fantasy, Family',
      director: 'Paul King',
      cast: 'Timothée Chalamet, Calah Lane, Keegan-Michael Key',
      rating: 'PG',
      length: '1 hr 57 min',
      releaseDate: '12/15/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Memory',
    description:
      'Academy Award winner Jessica Chastain and Peter Sarsgaard, the Volpi Cup recipient at the 2023 Venice Film Festival, come together in acclaimed writer/director Michel Franco’s stirring new film “Memory,” to be released on December 22 in New York and Los Angeles prior to a nationwide rollout on January 5 from Ketchup Entertainment. ',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BODY0OWE3NTAtZjJkMS00YjVlLWJiZDktMzViMDE3Y2Q2MWQ0XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/08/16/12/17/1525042.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/18/15/07/0869428.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/18/15/07/0888147.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/18/15/07/0902187.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/18/15/07/0916227.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/18/15/07/0930266.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Drama',
      director: 'Michel Franco',
      cast: 'Jessica Chastain, Peter Sarsgaard, Merritt Wever',
      rating: 'R',
      length: '1 hr 40 min',
      releaseDate: '12/22/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'The Hunger Games: The Ballad of Songbirds and Snakes',
    description:
      'THE HUNGER GAMES: THE BALLAD OF SONGBIRDS & SNAKES follows a young Coriolanus (Tom Blyth) who is the last hope for his failing lineage, the once-proud Snow family that has fallen from grace in a post-war Capitol. With his livelihood threatened, Snow is reluctantly assigned to mentor Lucy Gray Baird (Rachel Zegler), a tribute from the impoverished District 12. But after Lucy Gray’s charm captivates the audience of Panem, Snow sees an opportunity to shift their fates. With everything he has worked for hanging in the balance, Snow unites with Lucy Gray to turn the odds in their favor. Battling his instincts for both good and evil, Snow sets out on a race against time to survive and reveal if he will ultimately become a songbird or a snake.',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/22/08/17/09/35/3319413.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/05/04/17/32/4611743.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/27/10/52/4783019.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/27/10/52/4768980.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/27/10/52/4754942.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/27/10/52/4740903.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Science Fiction, Action, Adventure',
      director: 'Francis Lawrence',
      cast: 'Tom Blyth, Rachel Zegler, Peter Dinklage',
      rating: 'PG-13',
      length: '2 hr 38 min',
      releaseDate: '11/17/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Poor Things',
    description:
      'From filmmaker Yorgos Lanthimos and producer Emma Stone comes the incredible tale and fantastical evolution of Bella Baxter (Stone), a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter (Willem Dafoe). Under Baxter’s protection, Bella is eager to learn. Hungry for the worldliness she is lacking, Bella runs off with Duncan Wedderburn (Mark Ruffalo), a slick and debauched lawyer, on a whirlwind adventure across the continents. Free from the prejudices of her times, Bella grows steadfast in her purpose to stand for equality and liberation.',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/09/01/17/37/0052711.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/01/17/37/0071433.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/01/17/37/0101077.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/01/17/37/0087035.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/06/01/14/02/4275340.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/06/01/14/02/4317459.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Drama, Fantasy, Science Fiction, Romance, Comedy',
      director: 'Yórgos Lánthimos',
      cast: 'Emma Stone, Mark Ruffalo, Willem Dafoe',
      rating: 'R',
      length: '2 hr 21 min',
      releaseDate: '12/8/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Night Swim',
    description:
      'Based on the acclaimed 2014 short film by Rod Blackhurst and Bryce McGuire, the film stars Wyatt Russell (The Falcon and the Winter Soldier) as Ray Waller, a former major league baseball player forced into early retirement by a degenerative illness, who moves into a new home with his concerned wife Eve (Oscar nominee Kerry Condon, The Banshees of Inisherin), teenage daughter Izzy (Amélie Hoeferle, this fall’s The Hunger Games: The Ballad of Songbirds and Snakes) and young son Elliot (Gavin Warren, Fear the Walking Dead). Secretly hoping, against the odds, to return to pro ball, Ray persuades Eve that the new home’s shimmering backyard swimming pool will be fun for the childs and provide physical therapy for him. But a dark secret in the home’s past will unleash a malevolent force that will drag the family under, into the depths of inescapable terror.',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BYjNhNTlhMDItNTE3Zi00OWE5LTliYjMtYjk0ODQ2ZjI4YTM1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/10/06/09/14/3854488.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/10/06/09/14/3871649.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/30/07/29/1662571.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/03/13/57/3374336.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/03/13/57/3391496.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/03/13/57/3408657.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Horror, Fantasy, Thriller',
      director: 'Bryce McGuire',
      cast: 'Wyatt Russell, Kerry Condon, Amélie Hoeferle',
      rating: 'PG-13',
      length: '1 hr 39 min',
      releaseDate: '1/5/2024',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Migration',
    description: `The Mallard family is in a bit of rut. While dad Mack is content to keep his family safe paddling around their New England pond forever, mom Pam is eager to shake things up and show their childs—teen son Dax and duckling daughter Gwen—the whole wide world. After a migrating duck family alights on their pond with thrilling tales of far-flung places, Pam persuades Mack to embark on a family trip, via New York City, to tropical Jamaica. 
    
    As the Mallards make their way South for the winter, their well-laid plans quickly go awry. The experience will inspire them to expand their horizons, open themselves up to new friends and accomplish more than they ever thought possible, while teaching them more about each other—and themselves—than they ever imagined.
      `,
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BYTIxZDM5YWItM2Y1My00ODg5LTkzNjAtMWFlZTNlODg0MzEyXkEyXkFqcGdeQXVyMTA5ODEyNTc5._V1_FMjpg_UX1000_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/04/13/17/38/2853653.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/04/13/17/38/2867693.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/07/18/17/49/4644614.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/07/18/17/49/4619655.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/07/18/17/49/4605615.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/12/15/42/5599601.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Animation, Adventure, Comedy, Family',
      director: 'Benjamin Renner',
      cast: '',
      rating: 'PG',
      length: '1 hr 22 min',
      releaseDate: '12/22/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'The Iron Claw',
    description:
      'The true story of the inseparable Von Erich brothers, who made history in the intensely competitive world of professional wrestling in the early 1980s. Through tragedy and triumph, under the shadow of their domineering father and coach, the brothers seek larger-than-life immortality on the biggest stage in sports. ',
    status: 'released',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BOGE5NjllZTEtMGJjNy00ZTFmLThlNDItNmNiZTgyOTQ4OTA2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',

      images: [
        'https://all.web.img.acsta.net/pictures/23/09/29/10/18/4964100.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/09/29/10/18/4946940.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/28/13/48/2992648.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/28/13/48/2441979.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/28/13/48/2777372.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/28/13/48/2947409.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Drama, Biopic',
      director: 'Sean Durkin',
      cast: 'Zac Efron, Harris Dickinson, Jeremy Allen White',
      rating: 'R',
      length: '2 hr 13 min',
      releaseDate: '12/22/2023',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Kingdom of the Planet of the Apes',
    description:
      'Director Wes Ball breathes new life into the global, epic franchise set several generations in the future following Caesar’s reign, in which apes are the dominant species living harmoniously and humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.',
    status: 'upcoming',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDcxM2RiOWMtMGEzMC00NDEyLTgzMjEtOWZjYzVhN2E2ZjcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
      images: [
        'https://all.web.img.acsta.net/pictures/22/10/03/10/29/1491929.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/02/11/49/1333382.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/03/09/22/4002396.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/03/09/22/4017996.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/03/09/22/4036716.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/03/09/22/4050756.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Science Fiction, Action, Adventure',
      director: 'Wes Ball',
      cast: 'Owen Teague, Freya Allan, Kevin Durand',
      rating: '',
      length: '',
      releaseDate: '5/10/2024',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'The Fall Guy',
    description:
      'He’s a stuntman, and like everyone in the stunt community, he gets blown up, shot, crashed, thrown through windows and dropped from the highest of heights, all for our entertainment. And now, fresh off an almost career-ending accident, this working-class hero has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job. What could possibly go right?',
    status: 'upcoming',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDQ2NDY5YzgtZmE1MC00YjMxLThjZTMtY2Y5YjZlMTNjOWFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
      images: [
        'https://all.web.img.acsta.net/pictures/23/11/02/16/29/3591716.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/02/16/29/3605755.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/02/16/29/3621355.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/11/02/16/29/3635395.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Action, Drama, Comedy',
      director: 'David Leitch',
      cast: 'Ryan Gosling, Emily Blunt, Aaron Taylor-Johnson',
      rating: 'PG-13',
      length: '',
      releaseDate: '5/3/2024',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Dune: Part Two',
    description:
      '"Dune: Part Two" will explore the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.',
    status: 'upcoming',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      images: [
        'https://all.web.img.acsta.net/pictures/23/12/14/11/10/3746278.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/14/11/10/3761878.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/14/11/10/3775918.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/14/11/10/3791518.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/14/11/10/3805558.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/14/11/10/3819598.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Science Fiction, Drama',
      director: 'Denis Villeneuve',
      cast: 'Timothée Chalamet, Zendaya, Tim Blake Nelson',
      rating: 'PG-13',
      length: '2 hr 46 min',
      releaseDate: '3/1/2024',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Kung Fu Panda 4',
    description: `After three death-defying adventures defeating world-class villains with his unmatched courage and mad martial arts skills, Po, the Dragon Warrior (Golden Globe nominee Jack Black), is called upon by destiny to … give it a rest already. More specifically, he’s tapped to become the Spiritual Leader of the Valley of Peace.
    
    That poses a couple of obvious problems. First, Po knows as much about spiritual leadership as he does about the paleo diet, and second, he needs to quickly find and train a new Dragon Warrior before he can assume his new lofty position. 
    
    Even worse, there’s been a recent sighting of a wicked, powerful sorceress, Chameleon (Oscar® winner Viola Davis), a tiny lizard who can shapeshift into any creature, large or small. And Chameleon has her greedy, beady little eyes on Po’s Staff of Wisdom, which would give her the power to re-summon all the master villains whom Po has vanquished to the spirit realm. 
    
    So, Po’s going to need some help. He finds it (kinda?) in the form of crafty, quick-witted thief Zhen (Golden Globe winner Awkwafina), a corsac fox who really gets under Po’s fur but whose skills will prove invaluable. In their quest to protect the Valley of Peace from Chameleon’s reptilian claws, this comedic odd-couple duo will have to work together. In the process, Po will discover that heroes can be found in the most unexpected places.
    `,
    status: 'upcoming',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
      images: [
        'https://all.web.img.acsta.net/pictures/23/12/13/17/16/1031879.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/13/17/16/1003799.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/23/12/13/17/16/1017839.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Animation, Comedy, Adventure, Family, Martial Arts',
      director: 'Mike Mitchell (V), Stephanie Stine',
      cast: '',
      rating: 'PG',
      length: '',
      releaseDate: '3/8/2024',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
  {
    name: 'Madame Web',
    description:
      "In a switch from the typical genre, Madame Web tells the standalone origin story of one of Marvel publishing's most enigmatic heroines. The suspense-driven thriller stars Dakota Johnson as Cassandra Webb, a paramedic in Manhattan who develops the power to see the future… and realizes she can use that insight to change it. Forced to confront revelations about her past, she forges a relationship with three young women bound for powerful destinies...if they can all survive a deadly present.",
    status: 'upcoming',
    media: {
      poster:
        'https://m.media-amazon.com/images/M/MV5BYjI5ZjVmZjEtYTliMS00Mjk3LWJkNTMtMjU0MTRkOTU4NWQ3XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg',
      images: [
        'https://all.web.img.acsta.net/pictures/23/11/15/15/50/3061175.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/15/08/36/3895255.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/15/08/36/3913975.jpg/rx_1536_x',
        'https://all.web.img.acsta.net/pictures/24/01/15/08/36/3928015.jpg/rx_1536_x',
      ],
      trailer: '',
    },
    meta: {
      genre: 'Action, Fantasy',
      director: 'S.J. Clarkson',
      cast: 'Dakota Johnson, Sydney Sweeney, Celeste O’Connor',
      rating: '',
      length: '',
      releaseDate: '2/14/2024',
    },
    showTimes: generateMockShowTimes(),
    ticketsPrices: {
      adult: 150,
      child: 120,
      senior: 90,
    },
  },
];
