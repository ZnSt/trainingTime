export const PokemonCard = ({ pokemonCustom }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img
        src={pokemonCustom.data.sprites.other["official-artwork"].front_default}
        width="300px"
        alt="pokemon"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>{pokemonCustom.data.name}</h2>
        <p>Weight: {pokemonCustom.data.weight}</p>
        <p>Height: {pokemonCustom.data.height}</p>
        <p>Order: {pokemonCustom.data.order}</p>
      </div>
    </div>
  );
};
