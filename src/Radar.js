import React from 'react';
import './Radar.css';

export default class Radar extends React.Component {

  render() {
    console.log(this.props.attack);
    return (
      <div id="chart">
        <h2>{ this.props.attack.nom } </h2>
        <h6>Niveau {this.props.attack.niveau}</h6>
          <div className='points'>
            <h5>Puissance</h5>
            <div id="power">
              {this.props.attack.puissance}
            </div>
          </div>

          <div className='points'>
            <h5>Precision</h5>
            <div id="prec">
              {this.props.attack.precision}
            </div>
          </div>
            <div className='points'>
            <h5>PP</h5>
            <div id="pp">
            {this.props.attack.pp}
            </div>
          </div>
      </div>
    )
  }
}
