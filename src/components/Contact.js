import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section className='m-4 contactHeading' id='Contact'>
        <h4>Get in Touch</h4>
        <hr />
        <div className='container contact_container pt-'>
            <form action=''>
                <input type='text' name='name' placeholder='Your Name' required />
                <input type='email' name='email' placeholder='email@email.com' required />
                <textarea name='message' rows='7' placeholder='Your Message Here' required></textarea>
                <button type='submit' className='btn btnCustom'>Send Message</button>
            </form>
        </div>
    </section>
    )
  }
}
