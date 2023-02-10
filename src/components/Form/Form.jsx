import { useState } from "react";
import { ReactComponent as IconSearch } from "../svg/search.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";

export const Form = ({onSubmit}) =>  {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    
    event.preventDefault();
    if (value.trim() === "") {
      toast.info("Пожалуйста, введите имя покемона");
      return;
    }
    onSubmit(value);
    reset();
  };
 
 const reset = () => {
  setValue("");
  };
  const handleChangeInput = (event) => {
    setValue(event.currentTarget.value.toLowerCase());
  };

    return (
      <form onSubmit={handleSubmit} className="form__style">
        <input
          type="text"
          value={value}
          onChange={handleChangeInput}
          placeholder="Find me..."
          className="input__style"
        />
        <button type="submit" className="btn__style">
          <IconSearch style={{ position: "absolute", top: "8px", left: "22px" }}></IconSearch>
        </button>
      </form>
    );
  
}
