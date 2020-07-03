import React from 'react';
import './ColorBlock.scss';

export class ColorBlock extends React.Component {
  render() {
    // Get `name` props
    const propsName = this.props.name;
    // Remove any spaces or special characters from `name` props
    const name = propsName.replace(/[^a-zA-Z0-9]/g, '');
    return (
      <div className="card-color" style={ { backgroundColor: name } }></div>
    );
  }
}