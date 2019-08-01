import React, { Component } from "react";
import "./PokeCard.css";

const POKE_API = "https://robohash.org/";

class PokeCard extends Component {
  render() {
    const props = this.props;

    return (
      <div className="PokeCard">
        <h2>{props.name}</h2>
        <img src={`${POKE_API}${props.id}.png`} alt="" />
        <div className="PokeCard-type">Type : {props.type}</div>
        <div className="PokeCard-scroe">Exp : {props.exp}</div>
      </div>
    );
  }
}

export default PokeCard;
