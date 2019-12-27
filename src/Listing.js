import React from 'react';
import Card from './Card';
import './index.css';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [],
      number: 0,
      cardHidden: true,
      selected: null,
      total: this.props.pokemons.length
    };

    this.listPokemon = this.listPokemon.bind(this)
    this.openDetails = this.openDetails.bind(this)
  }

  openDetails(pokemon, e) {
    e.preventDefault();
    if (this.state.cardHidden) {
      this.setState({selected: pokemon})
      this.setState({list: []})
      this.setState({cardHidden: false})
      console.log('open component', pokemon.nom)
    }
  }

  listPokemon() {

    // NOTE: repalce pokemon list by first part list
    const list = this.props.pokemons.map((pokemon, idx) =>
      <li className="list-group-item" key={idx}
      onClick={(e) => this.openDetails(pokemon, e)}>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`}
        className="img-fluid" alt="pokemon"/>
        <div>
            {pokemon.nom}
            <b>#{pokemon.numero}</b>
        </div>
      </li>
    )
    // this.setStat
    return list;
  }

  render() {
    return (
      <div>
          {!this.state.cardHidden && <Card info={this.state.selected}/>}

        <div className="row">
        <div className="col"></div>
        <div className="col-10">
        <div>
        <ul className='list-group listPokemon'>{this.listPokemon()}</ul>
        </div>
        </div>
        <div className="col"></div>
        </div>
      </div>
    )
  }
}
