import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createBrowserHistory } from 'history';


// import './styles.css';
import axios from 'axios';
const Register = () => {
  const history = createBrowserHistory();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    college: '',
    collegeCity: '',
    collegeState: '',
    collegeCountry: '',
    branch: '',
    semester: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post('http://localhost:8081/api/v1/users/students/student-signup', formData)
      .then(response => {
        console.log(response.data);
        history.push('/login');
      })
      .catch(error => {
        console.log(error);
      });

  };

  return (
    <div className="register-container">
      <h1 className="text-center mb-5">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCollege">
          <Form.Label>College/University</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your college/university"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCollegeCity">
          <Form.Label>College City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your college city"
            name="collegeCity"
            value={formData.collegeCity}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCollegeState">
          <Form.Label>College State/Province</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your college state/province"
            name="collegeState"
            value={formData.collegeState}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCollegeCountry">
          <Form.Label>College Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your college country"
            name="collegeCountry"
            value={formData.collegeCountry}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBranch">
          <Form.Label>Branch</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="semester">
          <Form.Label>Semester</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;


