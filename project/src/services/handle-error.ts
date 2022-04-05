import request from 'axios';
import { toast } from 'react-toastify';

import { HttpCode } from '../constants/http';
import { TError } from '../types/error';

export function handleError(error: TError): void {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response && Object.values(HttpCode).includes(response.status)) {
    toast.info(response.data.error);
  }
}
