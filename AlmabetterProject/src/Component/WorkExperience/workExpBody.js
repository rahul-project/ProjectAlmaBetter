import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import { Button, Form, Col, Row } from 'react-bootstrap'
import './workExpSub.css'

const WorkExpBody = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="Box2">
      <Form>
        <div className="heading">
          <h3 className="head1">Work Experience</h3>
          <div className="caption">Experience 1</div>
        </div>
        <div className="Box3">
          <Form as={Row}>
            <Form.Group as={Col} controlId="formJobT">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Job Title here" />
            </Form.Group>
            <Form.Group as={Col} controlId="formOrg">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control type="text" placeholder="Name of Organization " />
            </Form.Group>
          </Form>
          <Form as={Row}>
            <Form.Group as={Col} controlId="formSY">
              <Form.Label>Start year</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col} controlId="formEY">
              <Form.Label>End year</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        </div>
        <div>
          <div className="btnab">
            {' '}
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="btnabc"
            >
              Add new
            </Button>
          </div>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <div className="box1">
                <div className="headingexp">
                  <div className="caption">Experience 2</div>
                </div>
              </div>
            </div>
          </Collapse>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <div className="box1">
                <Form as={Row}>
                  <Form.Group as={Col} controlId="formJobT">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Job Title here"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formOrg">
                    <Form.Label>Organization Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name of Organization "
                    />
                  </Form.Group>
                </Form>
                <Form as={Row}>
                  <Form.Group as={Col} controlId="formSY">
                    <Form.Label>Start year</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formEY">
                    <Form.Label>End year</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Collapse>
        </div>
      </Form>
      <div className="btna">
        <Button variant="outline-primary">Back</Button>{' '}
        <Button variant="primary">Next</Button>{' '}
      </div>
    </div>
  )
}

export default WorkExpBody
