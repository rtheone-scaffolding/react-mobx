import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';
import { createRenderer } from 'fela';
import { Provider as FelaProvider } from 'react-fela';
import { Provider as MobXProvider } from 'mobx-react';
const renderer = createRenderer();

import App from './app.tsx';
import Store from './store.ts';
let store = new Store();

render(
  <FelaProvider renderer={renderer}>
    <MobXProvider store={store}>
      <App />
    </MobXProvider>
  </FelaProvider>,
  document.getElementById('app')
);
