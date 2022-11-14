import React from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'

const PersonalInfoBody = () => {
  return (
    <div>
      <Form>
        <div className="box1">
          <Form as={Row}>
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
          </Form>
          <Form as={Row}>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group as={Col} controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="number" placeholder="Enter your mobile no." />
            </Form.Group>
          </Form>
          <Form.Group className="div-col" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" />
          </Form.Group>
          <Form as={Row}>
            <Form.Group as={Col} controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter your state name" />
            </Form.Group>
          </Form>
        </div>
        <Form.Group className="div-col-col" controlId="form.Textarea">
          <Form.Label>Objectives</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <div className="btna">
        <Button variant="outline-primary">Back</Button>{' '}
        <Button variant="primary">Next</Button>{' '}
      </div>
    </div>
  )
}

export default PersonalInfoBody
