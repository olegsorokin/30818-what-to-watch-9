import request from 'axios';
import { toast } from 'react-toastify';

import { HttpCode } from '../constants/http';
import { Error } from '../types/error';
import { store } from '../store';
import { redirectToRoute } from '../store/action';
import { AppRoute } from '../constants/routs';

export function handleError(error: Error): void {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
      case HttpCode.Unauthorized:
        toast.info(response.data.error);
        break;
      case HttpCode.NotFound:
        toast.info(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.NotFound));
        break;
    }
  }

  toast.error('Something went wrong!');
}
