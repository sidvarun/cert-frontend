import React from "react";
import { Form, Button} from "react-bootstrap";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Swal from 'sweetalert2';


import Home from '../screens/Home';

import '../login.css';




const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isAuthenticated, error} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    // try{
      dispatch(login(email, password, (response) => {
        if(response.success){
          Swal.fire({
              title: 'Logged in successfully!',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false,
          });
        }
        else{
          Swal.fire({
            title: 'Oops',
            icon: 'error',
            timer: 4000,
            showConfirmButton: false,
            text : response.error
          })
        }
      }));

      console.log(`this is the error - ${error}`);
      console.log(`isAuthenticated value is - ${isAuthenticated}`);
    // }
    // catch(error){
    //     Swal.fire({
    //       icon: "error",
    //       title: "Login Failed",
    //       text: error.response.data.message,
    //   });
    // }

  };

//   return (
//   <div>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           Event App
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/home">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/register">
//                 Register
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
      
//     <div className="d-flex align-items-center justify-content-center h-100">
//       <Form onSubmit={handleSubmit} className="w-50">
//         <h2 className="mb-4 text-center">LogIn</h2>
//         <Form.Group controlId="email">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" style={{ margin: '10px 250px' }}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   </div>
//   );
// };

// export default LoginForm;

return (
  <div>
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
                <Link className="nav-link active" to="/register" style={{ color: "white"}}>
                  Sign up
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
      <div className="my-5 card p-4" style={{ width: '30rem'}}>

      <Form onSubmit={handleSubmit} className="login-form">
        <h2 className="mb-4 text-center">Sign-in</h2>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </div>
    </div>
    {error && (<div className="d-flex align-items-center justify-content-center h-100 my-5 card p-4">{error}</div>)}
  </div>
);
};

export default LoginForm;