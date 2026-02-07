import { useState } from 'react'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    updates: true
  })

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email) {
      alert('Please enter your name and email address.')
      return
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }

    alert('Thank you! You have successfully subscribed to our newsletter.')
    console.log('Newsletter subscription:', formData)
    
    setFormData({
      name: '',
      email: '',
      company: '',
      updates: true
    })
  }

  return (
    <section id="join" className="cta-section">
      <div className="container">
        <h2>We Build the New. To Be WE, We Need YOU.</h2>
        <p>Join the Newsletter, Join the Movement.</p>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name (required)" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email (required)" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group checkbox">
            <input 
              type="checkbox" 
              id="updates"
              name="updates"
              checked={formData.updates}
              onChange={handleChange}
            />
            <label htmlFor="updates">Receive Important Updates</label>
          </div>
          <button type="submit" className="btn-submit">JOIN US</button>
        </form>
      </div>
    </section>
  )
}
