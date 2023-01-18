import "./List.css";
import Button from "react-bootstrap/Button";
import { ReactComponent as IconMin } from "../../../svg/minus-solid.svg";

export const List = ({ todos, title, onDelete }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul className="TodoList">
        {todos.map(({ text, id }) => (
          <li key={id} className="TodoList__item">
            <p className="TodoList__text">{text}</p>
            <Button
              variant="light"
              onClick={() => onDelete(id)}
              style={{ background: "white", border: "none" }}
            >
              <IconMin />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
