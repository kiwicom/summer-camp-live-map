// @flow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetch from 'isomorphic-unfetch';
import config from '../config';

type Operation = {
  text: string,
};

function fetchQuery(operation: Operation, variables: {}) {
  return fetch(config.relay.endpointUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json());
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
