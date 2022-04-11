import { ALL_GENRES, MAX_GENRES } from '../constants/genre';
import { PromiseState } from '../constants/promise-state';
import { RatingLevel } from '../constants/rating-level';
import { Film } from '../types/film';
import { Genre } from '../types/genre';

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  );
}

export function isLastItem(length: number, index: number): boolean {
  return index === length - 1;
}

const formatTime = (number: number) => `0${number}`.slice(-2);

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mim = formatTime(minutes % 60);
  return `${hours}h ${mim}m`;
}

type LoadingState<T> = {
  data: T;
  isLoading: boolean;
  isLoaded: boolean;
};

export function loadData<T>(state: LoadingState<T>, type: PromiseState): LoadingState<T> {
  switch (type) {
    case PromiseState.Pending:
      return { ...state, isLoading: true, isLoaded: false };
    case PromiseState.Fulfilled:
      return { ...state, isLoading: false, isLoaded: true };
    case PromiseState.Rejected:
      return { ...state, isLoading: false, isLoaded: true };
  }
}

export function createGenresList(films: Film[]): Genre[] {
  const uniqueGenres = new Set<Genre>();
  films.forEach((film) => uniqueGenres.add(film.genre));
  const sortedGenres = [...uniqueGenres].slice(0, MAX_GENRES).sort();
  return [ALL_GENRES, ...sortedGenres];
}

export const getRatingLevel = (rating: number): string => {
  if (rating >= 0 && rating < 3) {
    return RatingLevel.Bad;
  }
  if (rating >= 3 && rating < 5) {
    return RatingLevel.Normal;
  }
  if (rating >= 5 && rating < 8) {
    return RatingLevel.Good;
  }
  if (rating >= 8 && rating < 10) {
    return RatingLevel.VeryGood;
  }
  if (rating === 10) {
    return RatingLevel.Awesome;
  }

  return RatingLevel.Unknown;
};

export const getProgress = (duration: number, currentTime: number) => Math.round(currentTime / (duration / 100));

export const getCurrentTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor(seconds / 60) % 60;
  const sec = seconds % 60;

  return hours === 0 ? `${formatTime(minutes)}:${formatTime(sec)}` : `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(sec)}`;
};

export const formatFractionDigits = (value: number, digits = 1) => value.toFixed(digits);
