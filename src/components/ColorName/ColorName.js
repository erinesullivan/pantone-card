import React from 'react';
import { colorNames } from './Colors';
import './ColorName.scss';

const colorNamesList = colorNames.map(
  (colorName) => {
    const colorNameKey = colorName.replace(/[^a-zA-Z0-9]/g, '');
    return (
      <option
        key={ colorNameKey }
        value={ colorName } />
    );
  }
);

export class ColorName extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div className="card-content">
        <h1>Pantone<sup>&reg;</sup></h1>
        <input
          aria-label="Color Name"
          type="text"
          list="colors"
          onChange={ this.handleChange }
          placeholder={ this.props.placeHolder }
          autoFocus />
        <datalist id="colors">
          { colorNamesList }
        </datalist>
      </div>
    );
  }
}
