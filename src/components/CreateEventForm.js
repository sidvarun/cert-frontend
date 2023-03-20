import { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent } from "../actions/eventsActions";
import { Form, Button } from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';

const CreateEventForm = ({ onClose, onEventCreated }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [speakerName, setSpeakerName] = useState("");

  const [location, setLocation] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleStartTime = (time) => {
    setStartTime(time);
  };
  const handleEndTime = (time) => {
    setEndTime(time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        title,
        description,
        startDate,
        endDate,
        startTime,
        endTime,
        meetingLink,
        speakerName,
        location,
        registration_open : true
    };

    console.log(data);

    await dispatch(createEvent(data));
    // setTimeout(() => {
    //     onEventCreated();
    // }, 2000);
  
    onEventCreated();
    
    onClose();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="speakerName">
        <Form.Label>Speaker Name</Form.Label>
        <Form.Control type="text" value={speakerName} onChange={(e) => setSpeakerName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="startTime">
        <Form.Label>Start Time</Form.Label>
        <TimePicker
          onChange={handleStartTime}
          value={startTime}
          showSeconds={false}
          step={15}
        />
      </Form.Group>


      <Form.Group controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control type="Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </Form.Group>


      <Form.Group controlId="endTime">
        <Form.Label>End Time</Form.Label>
        <TimePicker
          onChange={handleEndTime}
          value={endTime}
          showSeconds={false}
          step={15}
        />
        {/* <Form.Control
          type="text"
          placeholder="Enter time"
          value={endTime?.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) || ''}
          readOnly
        /> */}

      </Form.Group>


      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="meetingLink">
        <Form.Label>Meeting Link</Form.Label>
        <Form.Control type="text" value={meetingLink} onChange={(e) => setMeetingLink(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Event
      </Button>
    </Form>
  );
};

export default CreateEventForm;
