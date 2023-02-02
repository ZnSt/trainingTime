import { Component } from "react";
import axios from "axios";
import { PokemonCard } from "components/PokemonCard";
import { ErrorPokemon } from "components/ErrorPokemon";
import { Loading } from "components/Loading";

export class PokemonInfo extends Component {
  state = {
    status: "idle",
    pokemonCustom: null,

    error: null,
    close: false,
  };
  componentDidUpdate(prevProps, _) {
    const prevName = prevProps.pokemonName;
    const currName = this.props.pokemonName;

    if (currName !== prevName) {
      this.setState({ status: "pending" });
      setTimeout(() => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${currName}`)
          .then((pokemon) => {
            console.log(pokemon);
            this.setState({ pokemonCustom: pokemon, status: "resolved" });
          })
          .catch((error) => {
            console.log(error);
            this.setState({ error, status: "rejected" });
          });
      }, 5000);
    }
  }

  render() {
    // ВСЯ ЛОГИКА ВЫПОЛНЕНА ЧЕРЕЗ СТЕЙТ-МАШИНУ
    const { pokemonCustom, status } = this.state;

    if (status === "idle") {
      return <div style={{ textAlign: "center " }}>Я жду пока ты начнешь меня искать🙈</div>;
    }
    if (status === "pending") {
      return <Loading />;
    }

    if (status === "rejected") {
      return (
        <div>
          <ErrorPokemon pokemonCustom={pokemonCustom}></ErrorPokemon>
        </div>
      );
    }

    if (status === "resolved") {
      return <PokemonCard pokemonCustom={pokemonCustom} />;
    }
  }

  // ТО ЧТО БЫЛО

  /* {error && <div>{error.response.data}</div>}
        {loading && <Loading />}
        {pokemonName === "" && <div>Я жду пока ты начнешь меня искать🙈</div>}
        {pokemonCustom && (
          <div>
            <img
              src={pokemonCustom.data.sprites.other["official-artwork"].front_default}
              width="300px"
              alt="pokemon"
            />
            <h2>{pokemonCustom.data.name}</h2>
          </div>
        )} */
}
