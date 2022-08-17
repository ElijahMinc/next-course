import React from "react"
import { contactType } from "../types"

const ContactInfo = ({ name, email, phone }: contactType) => {
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
