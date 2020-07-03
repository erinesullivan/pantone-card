import React from 'react';
import { ColorBlock } from '../ColorBlock/ColorBlock';
import { ColorName } from '../ColorName/ColorName';
import { colorNames } from '../ColorName/Colors';
import './PantoneCard.scss';

const randomColor = colorNames[Math.floor(Math.random() * colorNames.length)];

export class PantoneCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: randomColor };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName ? newName : randomColor
    });
  }

  render() {
    return (
      <div className="pantone-card">
        <ColorBlock name={this.state.name} />
        <ColorName
          onChange={this.changeName}
          placeHolder={ this.state.name } />
      </div>
    );
  }
}