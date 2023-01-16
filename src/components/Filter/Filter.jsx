export const Filter = ({ onFilter, value }) => {
  return (
    <>
      <h2>Filter</h2>
      <input type="text" placeholder="Find contacts by name " value={value} onChange={onFilter} />
    </>
  );
};
