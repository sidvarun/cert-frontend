import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';
import '../login.css'

// import './styles.css';
import axios from 'axios';
const Register = () => {
  // const history = createBrowserHistory();

  const navigate = useNavigate();

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
    // console.log(formData);
    axios.post('http://localhost:8081/api/v1/users/students/student-signup', formData)
      .then(response => {
        console.log(response);
        Swal.fire({
          title: 'Registration was Successful!',
          icon: 'success',
          timer: 4000,
          showConfirmButton: false,
        });

        navigate('/login');
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          title: 'Oops',
          icon: 'error',
          timer: 4000,
          showConfirmButton: false,
          text : error.response.data.message
        })
      });

  };

  return (
    <div className="register-container">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1f4068", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "white"}}>
            Intel® Unnati Learning Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/login" style={{ color: "white"}}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/" style={{ color: "white"}}>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="my-5 card p-4" style={{ width: '35rem'}}>

          <Form className = "login-form" onSubmit={handleSubmit}>
            <h2 className="mb-4 text-center">Sign-up</h2>

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
              <Form.Label>Year of Passing</Form.Label>
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
      </div>
    </div>
  );
};

export default Register;


