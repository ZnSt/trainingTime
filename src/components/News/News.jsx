import { useState, useEffect } from 'react';
import { APIfetchArticles } from '../../services/api';
import { Form } from 'components/Form';

export const News = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = () => {
    setIsLoading(true);
    APIfetchArticles({ searchQuery: query, currentPage })
      .then((responseArticles) => {
        setArticles((prevArticles) => [...prevArticles, ...responseArticles]);
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage, query, fetchArticles]);

  const onChangeQuery = (query) => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
  };

  const shouldRenderMoreBtn = articles.length > 0 && !isLoading;

  return (
    <>
      {error && <h1>I'm sorry but it is error</h1>}
      <Form onSubmit={onChangeQuery} />
      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
      {shouldRenderMoreBtn && <button>Load More</button>}
      {isLoading && <p>Waiting...</p>}
    </>
  );
};
