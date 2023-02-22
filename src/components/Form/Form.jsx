import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleChange} value={query} />
      <button>Search</button>
    </form>
  );
};
