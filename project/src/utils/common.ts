import { PromiseState } from '../constants/promise-state';

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

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = (`0${minutes % 60}`).slice(-2);
  return `${h}h ${m}m`;
}

type LoadingState<T> = {
  data: T,
  isLoading: boolean,
  isLoaded: boolean,
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
