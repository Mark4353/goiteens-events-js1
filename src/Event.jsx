import PropTypes from "prop-types";
import styled from "styled-components";
import { FaClock, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const Card = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  margin: 10px;
`;

const Title = styled.h2`
  text-align: center;
`;

const EventList = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  list-style: none;
`;

function Event({ name, start, end, location, speaker }) {
  const startDate = new Date(start).toLocaleString();
  const endDate = new Date(end).toLocaleString();

  return (
    <Card>
      <EventList>
        <ListItem>
          <Title>{name}</Title>
          <p>
            <FaClock /> {startDate}
          </p>
          <p>
            <FaClock /> {endDate}
          </p>
          <p>
            <FaMapMarkerAlt /> {location}
          </p>
          <p>
            <FaUser /> {speaker}
          </p>
        </ListItem>
      </EventList>
    </Card>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
};

export default Event;
