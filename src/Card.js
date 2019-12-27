import React from 'react';
import './Card.css';
import Radar from './Radar';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.threadInfo = this.threadInfo.bind(this);
  }

  threadInfo() {
    const table_info = {
      espece: "Espèce",
      taille: "Taille",
      poids: "Pesée",
      expmax: "Niveau maximal",
      couleur: 'Couleur',
      type1: "Type"
    };
    const table = Object.entries(table_info).map((val, indx) =>
        <tr key={indx}>
          <th>{val[1]}</th>
          <td>{this.props.info[val[0]]}</td>
        </tr>
    )
    return table;
  }

  diagramLoop() {
    const { attaques } = this.props.info;
    return attaques.map((value, indx) =>
      <Radar key={indx} attack={value} />
    )
  }

  render() {
    return (
      <div className="cards-rotate">
        <div className="cards-content">
          <div className="cards-header">
            <div className="cards-title">
              <img className="img-fluid" alt=""
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.info.ndex}.png`}/>
              <h2>{this.props.info.nom}</h2>
              <p>{this.props.info.légende}</p>
            </div>
            <table className="table">
              <tbody>
                { this.threadInfo() }
              </tbody>
            </table>
          </div>

          <div className="card-content">
            <section className="">
              { this.diagramLoop() }
            </section>
          </div>
        </div>

      </div>
    )
  }
}
