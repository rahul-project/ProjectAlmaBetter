import React, { useState } from 'react'
import IconsCamera from './iconsCamera.png'

export default function ImageUpload() {
  const [image, setImage] = useState({ preview: '', raw: '' })

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image.raw)

    await fetch('YOUR_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
  }

  return (
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <div>
            <img className="ProfileImg" src={image.preview} alt="dummy" />
            <div className="changePhoto">Change profile photo</div>
          </div>
        ) : (
          <>
            <div>
              <img className="ProfileImg" alt="Profile Img" src={IconsCamera} />
            </div>
            <div className="changePhoto">
              <input
                type="file"
                id="upload-button"
                onChange={handleChange}
                style={{ display: 'none' }}
              />
            </div>
            <button className="changePhoto" onClick={handleUpload}>
              Change profile photo
            </button>
          </>
        )}
      </label>

      <br />
      {/* <button onClick={handleUpload}>Upload</button> */}
    </div>
  )
}
