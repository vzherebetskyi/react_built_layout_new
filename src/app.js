import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import LazyFirstBlock from './components/lazyblocks/LazyFirstBlock';
import LazySecondBlock from './components/lazyblocks/LazySecondBlock';
const FirstBlock = lazy(() => import('./components/FirstBlock'));
const SecondBlock = lazy(() => import('./components/SecondBlock'));
import './styles/styles.scss';

const App = () => (
  <div>
    <Suspense fallback={<LazyFirstBlock />}>
      <FirstBlock />
    </Suspense>
    <Suspense fallback={<LazySecondBlock />}>
      <SecondBlock />
    </Suspense>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
