import cry from "../img/718778d44c30d2c214f2f76007dba67a.jpeg";
export const ErrorPokemon = ({ pokemonCustom }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <img
        src={cry}
        alt="pikachu cry"
        width="500px"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "5px" }}
      />

      <h1
        style={{ textAlign: "center" }}
      >{`Извините, но такого покемона с именем ${pokemonCustom} несущетсвует`}</h1>
    </div>
  );
};
