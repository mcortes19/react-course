import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'my-brand' }, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havenese',
    }),
    React.createElement(Pet, {
      name: 'Paper',
      animal: 'Bird',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, {
      name: 'Sudo',
      animal: 'Dog',
      breed: 'Wheaten Terrier',
    }),
  ]);
};

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('root')
);
