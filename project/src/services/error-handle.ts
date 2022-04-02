import request from 'axios';
import { toast } from 'react-toastify';

import { HttpCode } from '../constants/http';
import { ErrorType } from '../types/error';

export function errorHandle(error: ErrorType): void {
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
        break;
    }
  }
}
