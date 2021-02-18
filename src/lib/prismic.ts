import { DefaultClient } from 'prismic-javascript/types/client';
import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://aleodoniblogesporte.cdn.prismic.io/api/v2';

export const client = (req = null): DefaultClient => {
  const options = req ? { req } : undefined;

  return Prismic.client(apiEndpoint, options);
};
