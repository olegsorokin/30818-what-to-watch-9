import request from 'axios';
import { toast } from 'react-toastify';

import { HttpCode } from '../constants/http';
import { TError } from '../types/error';
import { store } from '../store';
import { redirectToRoute } from '../store/action';
import { AppRoute } from '../constants/routs';

export function handleError(error: TError): void {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HttpCode.UNAUTHORIZED:
        toast.info(response.data.error);
        break;
      case HttpCode.NOT_FOUND:
        toast.info(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.NotFound));
        break;
    }
  }
}
