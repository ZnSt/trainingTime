import {  useState } from "react";
import { ToastContainer } from "react-toastify";

import { Form } from "./Form";
import { PokemonInfo } from "./PokemonInfo";

export const App = () => {
const [value, setValue] = useState("")

return (
      <>
        <Form onSubmit={setValue} />
        <ToastContainer theme="dark " />
        <PokemonInfo pokemonName={ value } />
      </>
    );
  }

