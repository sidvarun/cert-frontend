import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uploadAttendees } from "../actions/attendeeActions";

const UploadAttendeeListForm = ({ eventId, handleClose }) => {
  const [csvFile, setCsvFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!csvFile) {
      alert("Please select a CSV file to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("attendees", csvFile);
    formData.append("eventId", eventId);
    console.log(formData);
    dispatch(uploadAttendees(formData));
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Upload Attendees CSV</Form.Label>
        <Form.Control type="file" accept=".csv" onChange={handleFileChange} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
    // <div>
    //     Upload Form
    // </div>
  );
};

export default UploadAttendeeListForm;
