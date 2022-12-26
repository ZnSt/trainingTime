import defaultImage from "../../img/default-thumbnail.jpeg";
import PropTypes from "prop-types";

export const Card = ({ data }) => {
  return (
    <div>
      {data.map(({ id, price, quantity, title, author = "no name", url = defaultImage }) => (
        <div key={id}>
          <img src={url} alt={title} width="480" />
          <h2>{title}</h2>
          <p>
            Author: <a href={author.url}>{author.tag}</a>
          </p>
          <p>Price: {price}</p>
          <p>In Stock: {quantity < 1 ? "❌" : "✅"}</p>
          <button type="button" className="button">
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,

  quantity: PropTypes.string.isRequired,
};
