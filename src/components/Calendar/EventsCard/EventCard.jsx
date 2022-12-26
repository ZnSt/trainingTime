import css from "./EventCard.module.css";
import PropTypes from "prop-types";
import { formatEventStart, formatEventDuration } from "utils";
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

export const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const formattedDistance = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={16} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={16} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={16} />
        {formattedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={16} />
        {formattedDistance}
      </p>

      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
