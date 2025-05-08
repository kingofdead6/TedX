import React from 'react'
import ContactUs from '../components/Contact/ContactUs'
import NavBar from '../components/shared/NavBar'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
  return (
    <div className='overflow-hidden'>
        <NavBar />
        <ContactUs />
        <ContactForm />
    </div>
  )
}

export default Contact