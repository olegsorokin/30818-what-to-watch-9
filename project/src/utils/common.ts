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

type LoadingState = {
  isLoading: boolean,
  isLoaded: boolean,
  error?: null
}

export function loadDataState(state: PromiseState): LoadingState {
  switch (state) {
    case PromiseState.PENDING:
      return { isLoading: true, isLoaded: false, error: null };
    case PromiseState.FULFILLED:
      return { isLoading: false, isLoaded: true, error: null };
    case PromiseState.REJECTED:
      return { isLoading: false, isLoaded: false };
  }
}
