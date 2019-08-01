import React, { Component } from "react";
import "./Pokedex.css";
import PokeCard from "./PokeCard";

class Pokedex extends Component {
  static defaultProps = {
    pokimon: [
      { id: 4, name: "Charmander", type: "fire", exp: 62 },
      { id: 7, name: "Squirtle", type: "water", exp: 63 },
      { id: 11, name: "Metapod", type: "bug", exp: 72 },
      { id: 12, name: "Butterfree", type: "flying", exp: 178 },
      { id: 25, name: "Pikachu", type: "electric", exp: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", exp: 95 },
      { id: 94, name: "Gengar", type: "poison", exp: 225 },
      { id: 133, name: "Eevee", type: "normal", exp: 65 }
    ]
  };

  render() {
    return (
      <div className={"Pokedex" + this.props.Iswinner ? "winner" : "loser"}>
        <h2>
          Pokedex : {this.props.Texp} -----{" "}
          {this.props.Iswinner ? "Winner" : "Loser"}
        </h2>
        <div className="Pokedex-container">
          {this.props.pokimon.map(p => (
            <PokeCard id={p.id} name={p.name} type={p.type} exp={p.exp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
