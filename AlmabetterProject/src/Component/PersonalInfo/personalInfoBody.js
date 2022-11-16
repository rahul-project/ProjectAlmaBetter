import React from 'react'
import { useState } from 'react'

const PersonalInfoBody = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="box1">
        <div className="form-row row">
          <div className="form-group col-md-6 col">
            <label for="FirstName">First Name</label>
            <input
              className="form-control"
              id="FirstName"
              type="text"
              name="FirstName"
              placeholder="Enter your first name"
              value={inputs.FirstName || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 col">
            <label for="LastName">Last Name</label>
            <input
              className="form-control"
              id="LastName"
              type="text"
              name="LastName"
              placeholder="Enter your last name"
              value={inputs.LastName || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row row">
          <div className="form-group col-md-6 col">
            <label for="Email">Email</label>
            <input
              className="form-control"
              id="Email"
              type="email"
              name="Email"
              placeholder="name@example.com"
              value={inputs.Email || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 col">
            <label for="Mobile">Mobile</label>
            <input
              className="form-control"
              id="Mobile"
              type="number"
              name="Mobile"
              placeholder="Enter your mobile no."
              value={inputs.Mobile || ''}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group div-col">
          <label for="Address">Address</label>
          <input
            className="form-control"
            id="Address"
            type="text"
            name="Address"
            placeholder="Enter your address"
            value={inputs.Address || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-row row">
          <div className="form-group col-md-6 col">
            <label for="City">City</label>
            <input
              className="form-control"
              id="City"
              type="text"
              name="City"
              placeholder="Enter your city name"
              value={inputs.City || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 col">
            <label for="State">State</label>
            <input
              className="form-control"
              id="State"
              type="text"
              name="State"
              placeholder="Enter your state name"
              value={inputs.State || ''}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row row">
          <div className="form-group col-md-6 col">
            <label for="PostalCode">Postal Code</label>
            <input
              className="form-control"
              id="PostalCode"
              type="number"
              name="PostalCode"
              placeholder="Enter your Postal Code"
              value={inputs.PostalCode || ''}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group div-col-col">
        <label for="Objectives">Objectives</label>
        <textarea
          className="form-control "
          id="Objectives"
          type="textarea"
          name="Objectives"
          rows={3}
          placeholder="Enter your objectives..."
          value={inputs.Objectives || ''}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="btna">
        <button type="button" class="btn btn-outline-primary">
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  )
}

export default PersonalInfoBody
