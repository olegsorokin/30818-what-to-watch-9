export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/film/:id',
  AddReview = '/film/:id/review',
  Player = '/player/:id'
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
}
