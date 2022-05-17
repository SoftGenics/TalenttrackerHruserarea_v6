import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';
import './Signup.css'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
const Signup = () => {
  return (
    <div>
    <Container fluid>
        <Row>
        <Col sm={7} className="signup-left">
        <h5 class="fw-bold text-warning mt-3 mx-3 ">Key Features:</h5>
            <ul className='list-unstyled'>
                <li><i className="fas fa-check me-3"></i>Free sign up</li>
                <li><i className="fas fa-check me-3"></i>Free use of our 2 Million candidate database PAN India</li>
                <li><i className="fas fa-check me-3"></i>1 recruiter-1 JD in majority cases</li>

                <li><i className="fas fa-check me-3"></i>Client coordination is to be done by you</li>
                <li><i className="fas fa-check me-3"></i>100s of new clients and hundreds of new JDs available per week (IT/non IT- PAN India)</li>
                <li><i className="fas fa-check me-3"></i>Live chat support, phone, whats app, sms support from our HQ/ admin desks</li>
                <li><i className="fas fa-check me-3"></i>Strong Emailing system for official communications with the clients, admin and candidates.</li>
                <li><i className="fas fa-check me-3"></i>Transparency, trust and mutual growth as the guided principles</li>
                <li><i className="fas fa-check me-3"></i>Respect to the talented recruiters and commitment to their career & achieve revenue targets</li>
            </ul>
          </Col>
          <Col sm={5} className="signup-right">
  
            <Container className='mt-3 '>
                <div className='d-flex'>
                <img src='images/logo.jpeg'  className='mb-3' alt='logo'></img><h5 className=' mt-3 fw-bold  mb-0 mx-2' style={{fontSize:"18px"}}>Talent Trackers Consulting Pvt Ltd</h5>
                </div>
              <Row className='align-items-center justify-content-center form-cont'>
                <Col md={8}>
                  <div className='mb-3'>
                    <h3 className='fw-bold'>Sign Up</h3>
                    <p className='mb-3 text-muted'>Sign Up For New Account</p>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="fullname" name="name"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Company Email" name="username"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Company" name="username"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password"  name="password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Confirm Password"  name="cpassword"/>
                    </Form.Group>
                    <Row>
                        <Col xs={5}>
                            <Form.Select >
                                <option>Country</option>
                                <option value="India(+91)">India(+91)</option>
                            </Form.Select>
                        </Col>
                        <Col xs={7}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="tel" placeholder="Number" name="name"  />
                    </Form.Group>
                        </Col>
                    </Row>
                    <div className='mb-4 d-flex'>
                      <span className='me-auto'><Link to="/" style={{textDecoration:'none'}}>Already Have account?</Link></span>
                    </div>
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
            </Form>
                </Col>
              </Row>
            </Container>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Signup