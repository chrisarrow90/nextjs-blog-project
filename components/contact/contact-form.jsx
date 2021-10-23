import { useState } from 'react'
import classes from './contact-form.module.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  function handleSubmit(event) {
    event.preventDefault()

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({ name: '', email: '', message: '' })
      })
  }

  function handleChange(event) {
    setFormData((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  return (
    <section className={classes.contact}>
      <h1>Contact me</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
