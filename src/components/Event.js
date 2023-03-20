import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerForEvent, updateEvent } from '../actions/eventsActions';
import { downloadCertificate } from '../actions/certActions';
import UploadAttendeeListForm from '../components/UploadAttendeeListForm';
import '../eventStyles.css';

const Event = ({ event }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.user.token);
  const user = useSelector((state) => state.auth.user);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [allowDownload, setAllowDownload] = useState(event.allowDownload || false);

  const handleDownloadCertificate = () => {
    dispatch(downloadCertificate(event._id, token));
  };

  const handleRegister = () => {
    dispatch(registerForEvent(event._id, token));
  };

  const handleShowUploadModal = () => {
    setShowUploadModal(true);
  };

  const handleCloseUploadModal = () => {
    setShowUploadModal(false);
  };

  const handleAllowDownloadChange = () => {
    dispatch(updateEvent(event._id));
  };

  // useEffect(() => {
  //   setAllowDownload(event.allowDownload);
  // }, [event]);
  
  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000); // convert seconds to milliseconds
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleString('en-US', options);
  };
  

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const eventStartDate = new Date(event.startDate);
  const eventEndDate = new Date(event.endDate);

  const startDate = `${eventStartDate.getDate()} ${monthNames[eventStartDate.getMonth()]}, ${eventStartDate.getFullYear()}`;
  const endDate = `${eventEndDate.getDate()} ${monthNames[eventEndDate.getMonth()]}, ${eventEndDate.getFullYear()}`;

  return (
    <Card className="event-card">
      <div className="event-card-header">
        <h2 className="event-card-title">{event.title}</h2>
      </div>
      <div className="event-card-body">
        <p className="event-card-description event-date">{startDate}, {formatTime(event.startTime)} - {endDate}, {formatTime(event.endTime)}</p>
        <p className="event-card-description">{event.description}</p>
        <p className="event-card-description event-date">Speaker - {event.speakerName}</p>
        {/* <p className="event-card-description">Time : {formatTime(event.startTime)} - {formatTime(event.endTime)}</p> */}
        {/* <p className="event-card-description">{event.description}</p> */}

        <Row>
          <Col>
            {!event.isRegistered && user && user.user.user.role === 'STUDENT' && (
              <Button variant="success" className="event-card-button" onClick={handleRegister}>
                Register
              </Button>
            )}
            {event.isRegistered && (
  <div className="event-card-registered">Registered</div>
  )}
          </Col>
          {/* <Col> */}
            {event.allowDownload && event.isRegistered && (
              <div className="button-container">
                {console.log(allowDownload)}
                <Button  size="lg" variant="primary" className="event-card-button" onClick={handleDownloadCertificate}>
                  Download Certificate
                </Button>
              </div>
            )}
            {!event.allowDownload && event.isRegistered && (
              <div className="button-container">
                {console.log(allowDownload)}
                <Button  size="lg" variant="primary" className="event-card-button-two" onClick={handleDownloadCertificate}>
                  Attend Event
                </Button>
              </div>
            )}

          {user && user.user.user.role === "ADMIN" && (
            <div className="mt-3">
              <input
                type="checkbox"
                checked={event.allowDownload}
                onChange={handleAllowDownloadChange}
                id={`allow-download-${event._id}`}
              />
              <label htmlFor={`allow-download-${event._id}`} className="ms-2">
                Allow Certificate Download
              </label>
            </div>
          )}

          {/* </Col> */}
        </Row>

        <Row className="my-2">
          {user && user.user.user.role === 'ADMIN' && (
            <div className='button-container'>
              <Button variant="primary" className="event-card-button-two" onClick={handleShowUploadModal}>
                Upload Attendees List
              </Button>
            </div>
          )}
          <Modal show={showUploadModal} onHide={handleCloseUploadModal}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Attendees List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UploadAttendeeListForm eventId={event._id} handleClose={handleCloseUploadModal} />
            </Modal.Body>
          </Modal>
        </Row>
      </div>
    </Card>
  );
};

export default Event;
