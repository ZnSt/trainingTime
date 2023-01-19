import { Component } from "react";
import { ToastContainer } from "react-toastify";

import { Form } from "./Form";
import { PokemonInfo } from "./PokemonInfo";

export class App extends Component {
  state = {
    value: "",
  };

  handleSearchFormSubmit = (pokemonName) => {
    this.setState({ value: pokemonName });
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((pokemon) => this.setState({ pokemon }));
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSearchFormSubmit} />
        <ToastContainer theme="dark " />
        <PokemonInfo pokemonName={this.state.value} />
      </>
    );
  }
}
