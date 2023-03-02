import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './../css/eventStyles.css';

const Event = (props) => {

  return (
    <Card className="event-card">
      <div className="event-card-header">
        <h2 className="event-card-title">{props.title}</h2>
        <p>{props.date}</p>
      </div>
      <div className="event-card-body">
        <p className="event-card-description">{props.description}</p>
        <Button variant="primary" className="event-card-button">Register</Button>
      </div>
      <div className="event-card-footer">
        {/* <p>Location: {props.event.location}</p> */}
      </div>
    </Card>
  );
};

export default Event;
