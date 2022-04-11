export const MIN_COMMENT_LENGTH = 50;

export const MAX_COMMENT_LENGTH = 400;

export const DEFAULT_RATING = 0;

export const MAX_RATING = 10;

export const STARS_ARRAY = new Array(MAX_RATING)
  .fill(0)
  .map((_, index) => String(MAX_RATING - index));
