import React from 'react';
import Listing from './Listing';
import './index.css';

export default class Pokemons extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      text: '',
      type: 'nom',
      filter: []
    };
    this.setType = this.setType.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    if (e.target.value.length !== 0) {
      const input_value = e.target.value;
      const filter = this.state.pokemons.filter(pokemon => {
        if (pokemon[this.state.type].toLowerCase().includes(input_value)) {
          return pokemon;
        }
      });
      this.setState({filter: filter});
    } else {
      this.setState({filter: this.state.pokemons});
    }
  }

  setType(e) {
    this.setState({type: e.target.value});
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4200/pokemons');
    const json = await response.json();
    this.setState({ pokemons: json });
    this.setState({ filter: json });
  }

  render() {
    const list = this.state.filter;
    return (
      <div className="App">
        <header>
          <div className="interupteurs">
            <div className="interupteur-blue"></div>
            <div className='little-btn'>
              <div className="interupteur red"></div>
              <div className="interupteur yellow"></div>
              <div className="interupteur green"></div>
            </div>
          </div>
          <div className="forme">
            <div id="carre"></div>
            <div id="triangle"></div>
            <div id="triangle-shadow"></div>
          </div>
        </header>

        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>

            <form className="col-10">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <select className="input-group-text custom-select" value={this.type} onChange={this.setType}>
                  <option value="nom" >Nom</option>
                  <option value="espece">Espèce</option>
                  </select>
                </div>
                <input
                name="searchbar"
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={this.handleInputChange} />
              </div>
            </form>

            <div className="col"></div>
          </div>

          <Listing pokemons={list}/>
        </div>

        <footer>
          <div className="row">
            <div className="col">
              <canvas className="btn-round"></canvas>
            </div>
            <div className="col">
              <div className="row">
                <canvas className="btn-footer red"></canvas>
                <canvas className="btn-footer green"></canvas>
              </div>
              <div className="row">
                <canvas className="footer-interface"></canvas>
              </div>
            </div>
            <div className="col">
              <div>
                <div id="cross">
                <div id="leftcross">
                <div id="leftT"></div>
                </div>
                <div id="topcross">
                <div id="upT"></div>
                </div>
                <div id="rightcross">
                <div id="rightT"></div>
                </div>
                <div id="midcross">
                <div id="midCircle"></div>
                </div>
                <div id="botcross">
                <div id="downT"></div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
