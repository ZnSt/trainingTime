export const Filter = ({ onFilter, changeFilter }) => {
  return (
    <label>
      <input type="text" value={onFilter} onChange={changeFilter} />
    </label>
  );
};
