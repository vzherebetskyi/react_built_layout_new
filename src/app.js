import React from 'react';
import ReactDOM from 'react-dom';

import FirstBlock from './components/FirstBlock';
import SecondBlock from './components/SecondBlock';
import './styles/styles.scss';

const App = () => (
  <div>
    <FirstBlock />
    <SecondBlock />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
