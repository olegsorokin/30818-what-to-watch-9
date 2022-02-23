import { Film } from '../types/film';

const films: Film[] = [
  {
    id: 1,
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    year: 2014,
    video: {
      src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    img: {
      stc: 'img/the-grand-budapest-hotel-poster.jpg',
      width: 218,
      height: 327,
      alt: 'The Grand Budapest Hotel poster',
    },
    rating: {
      score: 8.9,
      level: 'Very good',
      count: 240,
    },
    description: [
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    ],
    director: 'Wes Anderson',
    starring: [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum',
    ],
    duration: 99,
  },
];

export { films };
