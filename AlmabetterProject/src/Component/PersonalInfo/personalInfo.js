import React from 'react'
import './personalInfo.css'
import PersonalInfoBody from './personalInfoBody.js'
import ImageUpload from './imageUpload.js'

import { Container } from 'react-bootstrap'

const Form = () => {
  return (
    <div className="m-Box">
      <Container className="Box">
        <ImageUpload />
        <PersonalInfoBody />
      </Container>
    </div>
  )
}

export default Form
