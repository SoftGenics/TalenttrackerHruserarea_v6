import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Table, Modal, Button, Form ,Row, Col } from 'react-bootstrap'
import './MyWorkSpace.css'


const MyWorkSpace = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [checked, setchecked] = useState(false)
 const handleChecked = () => setchecked(!checked)

  return (
    <div>
      <Sidebar />
      <NavbarMenu />
      <Container className='myworkspace'>
        <h5 className='mt-5 text-muted fw-bold text-center'>My Work Space</h5>
      </Container>
      <div className='jd-wraper'>
      <Container className='table-data'>
        <Table className='data-table'>
          <thead>
            <tr>
              <th>JD number</th>
              <th>User ID/user name</th>
              <th>Job Description</th>
              <th>Add candidate </th>
              <th>JD details</th>
              <th>Terms of JD</th>
              <th>List of candidates</th>
              <th>Button-create tracker sheet</th>
              <th>Submit</th>
              <th>No. of submissions</th>
              <th>Status</th>
              <th>Date -time of submission</th>
              <th>Feedback from client</th>
              <th>Offer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>user001</td>
              <td></td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
            </tr>
          </tbody>
        </Table>
      </Container>
      </div>
      {/* Add candidate Modal Box */}
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-user-plus me-3" ></i>Add candidate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Row>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className='fw-bold mb-3'>JD number </Form.Label>
                <Form.Control type="text" defaultValue="1" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className='fw-bold mb-3'>Client name </Form.Label>
                <Form.Control type="text" defaultValue="Pkrs" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className='fw-bold mb-3'>JD title  </Form.Label>
                <Form.Control type="text" defaultValue="testing" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>JD location </Form.Label>
                <Form.Control type="text" defaultValue="India" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>Recruiter ID  </Form.Label>
                <Form.Control type="text" defaultValue="001" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>Candidate name  </Form.Label>
                <Form.Control type="text" defaultValue="Prashant Kumar" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
              <Form.Label className='fw-bold mb-3'>Current salary </Form.Label>
              <div className='d-flex'>
                <Form.Control type='text' placeholder='Please mention a break up of fix and variable salary component' />
                <Form.Select>
                  <option value="January">January</option>
                  <option value="feb">Feb</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </Form.Select>
                <Form.Select>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2020</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </Form.Select>
              </div>
              </Form.Group>

            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3' >Expected salary </Form.Label>
                <div className='d-flex'>
                  <Form.Control type='text' placeholder='Please mention expected salary (percentage or absolute value)' />
                  <Form.Select>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Non-Negotiable">Non-Negotiable</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Experience </Form.Label>
                <Form.Control type="text" placeholder='limit 500 characters' />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Education </Form.Label>
                <Form.Control type="text" placeholder='limit 500 characters' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Current organization  </Form.Label>
                <Form.Control type="text" placeholder='limit 500 characters' />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Current location </Form.Label>
                <Form.Control as="textarea" rows={3} type="address" placeholder='limit 500 characters' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Candidate mobile number </Form.Label>
                <Form.Control type="tel" placeholder='Phone Number' />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Notice period  </Form.Label>
                <Form.Select>
                  <option value='Immediate'>Immediate</option>
                  <option value='15 days'>15 days</option>
                  <option value='21 days '>21 days </option>
                  <option value='30 days'>30 days</option>
                  <option value='45 days'>45 days</option>
                  <option value='2 months'>2 months</option>
                  <option value='75 days'>75 days</option>
                  <option value='90 days'>90 days</option>

                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
            <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Negotiable to  </Form.Label>
                <Form.Select>
                  <option value='Immediate'>Immediate</option>
                  <option value='15 days'>15 days</option>
                  <option value='21 days '>21 days </option>
                  <option value='30 days'>45 days</option>
                  <option value='2 months'>2 months</option>
                  <option value='75 days'>75 days</option>

                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Non-Negotiable to </Form.Label>
                <Form.Select>
                  <option value='Immediate'>Non-Negotiable to</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
           <Form.Label className='mt-3 fw-bold'>JD sent to candidate</Form.Label>
           <div className='d-flex'>
            <Form.Check type="radio" label="Yes" Name="jdsent" value='Yes' />
            <Form.Check className='mx-3' type="radio" label="No" Name="jdsent" value='No' />
           </div>
            </Col>
            <Col xs={6}>
            <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Candidate availability for the interview </Form.Label>
                <Form.Select>
                  <option >Select</option>
                  <option value='Virtual/Telephonic- Any mutually decided time. (this week/next week)'> Virtual/Telephonic- Any mutually decided time. (this week/next week)</option>
                  <option value='F2F- Any mutually decided time (this week/next week)'>F2F- Any mutually decided time (this week/next week)</option>
                  <option value='Others'>Others</option>
                </Form.Select>
              </Form.Group>
              <Form.Label className='fw-bold mt-3 mb-3'> </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className="fw-bold">Recruiter’s remarks <i className="fas fa-info ms-3" style={{color:'blue'}} onClick={handleChecked}></i></Form.Label>
                <Form.Control type='text' name="remarks" placeholder='Remarks' />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Date and Time of adding a candidate</Form.Label>
                <div className='d-flex'>
                  <Form.Control type="date" />
                  <Form.Control type="time" />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={checked?'showcheckbox1':'showcheckbox'}>
              
              <div className=' mt-3 '>
                <Form.Check type="checkbox" label='Not working? ' className='mx-2' />
                <Form.Check type="checkbox" label='Strong Need factor for change?' className='mx-2' />
                <Form.Check type="checkbox" label='Relocation case? ' className='mx-2' />
                <Form.Check type="checkbox" label='Career stability? ' className='mx-2' />
                <Form.Check type="checkbox" label='Looking for role change, profile change/ growth?' className='mx-2' />
                <Form.Check type="checkbox" label='Flexible for salary negotiation?' className='mx-2' />
                <Form.Check type="checkbox" label='Period negotiation? ' className='mx-2' />
                <Form.Check type="checkbox" label='flexible to attend rounds of interview? ' className='mx-2' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Special comments</Form.Label>
              <Form.Control as="textarea" row={3} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Candidate ID </Form.Label>
                <Form.Control type='text' name="alphnumericid" placeholder='(8 digit alpha numeric ID generated by system)' />
              </Form.Group>
            </Col>
          </Row>
          <Button variant='success' className='mt-3'>Add candidate</Button>
        </Form>
 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MyWorkSpace