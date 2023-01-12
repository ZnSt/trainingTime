import "./List.css";
export const List = ({ todos, title, onDelete }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul className="TodoList">
        {todos.map(({ text, id, completed }) => (
          <li key={id} className="TodoList__item">
            <input type="checkbox" checked={completed} />
            <p className="TodoList__text">{text}</p>
            <button onClick={() => onDelete(id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </>
  );
};
