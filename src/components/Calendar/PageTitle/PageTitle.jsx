import css from "./PageTitle.module.css";
import PropTypes from "prop-types";

export const PageTitle = ({ title }) => {
  return <h1 className={css.title}>{title}</h1>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
