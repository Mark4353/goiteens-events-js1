import PropTypes from 'prop-types';
import Event from './Event';

function PageBoard({ events }) {
  return (
    <div className="page-board">
      {events.map(e => (
        <Event
          key={e.name + e.time.start}
          name={e.name}
          location={e.location}
          speaker={e.speaker}
          start={e.time.start}
          end={e.time.end}
        />
      ))}
    </div>
  );
}

PageBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }).isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PageBoard;
