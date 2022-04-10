import { PromiseState } from '../constants/promise-state';
import { RatingLevel } from '../constants/rating-level';

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
  const h = Math.floor(minutes / 60);
  const m = formatTime(minutes % 60);
  return `${h}h ${m}m`;
}

type LoadingState<T> = {
  data: T;
  isLoading: boolean;
  isLoaded: boolean;
};

export function loadData<T>(state: LoadingState<T>, type: PromiseState): LoadingState<T> {
  switch (type) {
    case PromiseState.PENDING:
      return { ...state, isLoading: true, isLoaded: false };
    case PromiseState.FULFILLED:
      return { ...state, isLoading: false, isLoaded: true };
    case PromiseState.REJECTED:
      return { ...state, isLoading: false, isLoaded: true };
  }
}

export const getRatingLevel = (rating: number): string => {
  if (rating >= 0 && rating < 3) {
    return RatingLevel.BAD;
  }
  if (rating >= 3 && rating < 5) {
    return RatingLevel.NORMAL;
  }
  if (rating >= 5 && rating < 8) {
    return RatingLevel.GOOD;
  }
  if (rating >= 8 && rating < 10) {
    return RatingLevel.VERY_GOOD;
  }
  if (rating === 10) {
    return RatingLevel.AWESOME;
  }

  return RatingLevel.UNKNOWN;
};

export const getProgress = (duration: number, currentTime: number) => Math.round(currentTime / (duration / 100));

export const getCurrentTime = (seconds: number): string => {
  const h = Math.floor(seconds / 60 / 60);
  const m = Math.floor(seconds / 60) % 60;
  const s = seconds % 60;

  return h === 0 ? `${formatTime(m)}:${formatTime(s)}` : `${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`;
};
