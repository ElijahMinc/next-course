import React from "react"

const ContactInfo = ({ name, email, phone }) => {
  return (
    <div>
      <strong>Name:</strong>
      <p>{name}</p>
      <strong>Email:</strong>
      <p>{email}</p>
      <strong>Phone:</strong>
      <p>{phone}</p>
    </div>
  )
}

export default ContactInfo
