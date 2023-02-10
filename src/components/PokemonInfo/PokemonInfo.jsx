import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonCard } from "components/PokemonCard";
import { ErrorPokemon } from "components/ErrorPokemon";
import { Loading } from "components/Loading";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved", 
  REJECTED: "rejected",
};
export const PokemonInfo = ({ pokemonName }) => {
  const [status, setStatus] = useState(Status.IDLE);
  const [pokemonCustom, setPokemonCustom] = useState(null);
  const [error, setError] = useState(null);
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (!pokemonName) {
      // Первый рендер, pokemonName это пустая строка, не делаем fetch
      return;
    }
    setStatus(Status.PENDING);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((pokemon) => {
        setPokemonCustom(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  // ВСЯ ЛОГИКА ВЫПОЛНЕНА ЧЕРЕЗ СТЕЙТ-МАШИНУ

  if (status === Status.IDLE) {
    return <div style={{ textAlign: "center " }}>Я жду пока ты начнешь меня искать🙈</div>;
  }
  if (status === Status.PENDING) {
    return <Loading />;
  }

  if (status === Status.REJECTED) {
    return (
      <div>
        <ErrorPokemon pokemonCustom={pokemonCustom}></ErrorPokemon>
      </div>
    );
  }

  if (status === Status.RESOLVED) {
    return <PokemonCard pokemonCustom={pokemonCustom} />;
  }
};

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
