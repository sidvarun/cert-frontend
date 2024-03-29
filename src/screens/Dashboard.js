import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';
import { fetchEvents } from '../actions/eventsActions';
import Event from '../components/Event';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

  const Dashboard = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logout());
  };
  const token = useSelector(state => state.auth.user.token);

  useEffect(() => {

    dispatch(fetchEvents(token));
  }, [dispatch, token]);

  const { loading, events, error } = useSelector((state) => state);
  const Events = events.events;
  console.log(events.events);

  const [filter, setFilter] = useState('registered'); // default value

  const [showUpcoming, setShowUpcoming] = useState(true);

  const upcomingEvents = Events.filter((event) => new Date(event.startDate) > new Date());
  const pastEvents = Events.filter((event) => new Date(event.startDate) <= new Date());

  const handleToggle = () => {
    setShowUpcoming(!showUpcoming);
  };


  const filteredEvents = Events.filter((event) => {
    if (filter === 'registered') {
      return event.isRegistered;
    } else if (filter === 'upcoming') {
      return new Date(event.startDate) > new Date() && !event.isRegistered;
    } 
    return new Date(event.startDate) < new Date();
  }).sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  
  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1f4068",  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)"
}}>
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
                <Link className="nav-link active" to="/profile" style={{ color: "white"}}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" onClick={handleLogout} style={{ color: "white"}}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Container >

      <Row className="my-5">
        {/* <Col>
          <h2>Student Dashboard</h2>
        </Col> */}
        <Col md="auto" className="text-end">
          <Form.Select size="lg" onChange={(e) => setFilter(e.target.value)}>
            <option value="registered">Registered Events</option>
            <option value="upcoming">Upcoming Events</option>
            <option value="past">Past Events</option>
          </Form.Select>
        </Col>
      </Row>

      <div className="container my-5">
        {/* <h2>Events</h2> */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Col key={event._id}>
                <Event event={event} />
              </Col>
            ))
          ) : (
            <p className="text-center my-5">No events</p>
          )}
        </Row>
      </div>
    </Container>
    </div>
  );
};  

export default Dashboard;
