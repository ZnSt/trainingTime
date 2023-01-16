export const ContactsList = ({ value, onDelete }) => {
  return (
    <>
      <h2>Contacts:</h2>
      <ul>
        {value.map(({ name, id, number }) => (
          <li key={id} style={{ display: "flex", justifyContent: "space-between", width: "350px" }}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => onDelete(id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
