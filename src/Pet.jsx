import React from 'react';

export default function Pet(props) {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.name),
    React.createElement('h3', {}, props.animal),
    React.createElement('h3', {}, props.breed),
  ]);
}
