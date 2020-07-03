import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import { PantoneCard } from './components/PantoneCard/PantoneCard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <PantoneCard />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
