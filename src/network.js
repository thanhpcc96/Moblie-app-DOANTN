// @flow
import { Network } from 'relay-runtime';
import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';

import config from './config';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const _cache = new RelayQueryResponseCache({ size: 30, tll: });
