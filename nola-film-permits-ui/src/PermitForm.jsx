import { useState } from 'react'
import axios from 'axios'

const PermitForm = () => {
  const [form, setForm] = useState({
    projectName: '',
    contactName: '',
    email: '',
    shootDate: '',
    location: '',
    specialRequests: ''
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/permits`, form)
      if (res.status === 201) {
        setStatus('success')
        setForm({
          projectName: '',
          contactName: '',
          email: '',
          shootDate: '',
          location: '',
          specialRequests: ''
        })
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: 'auto' }}>
      <h2>Submit a Film Permit</h2>

      <input type="text" name="projectName" placeholder="Project Name" value={form.projectName} onChange={handleChange} required />
      <input type="text" name="contactName" placeholder="Contact Name" value={form.contactName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="date" name="shootDate" placeholder="Shoot Date" value={form.shootDate} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
      <textarea name="specialRequests" placeholder="Special Requests" value={form.specialRequests} onChange={handleChange} />

      <button type="submit">Submit Permit</button>

      {status === 'success' && <p style={{ color: 'green' }}>✅ Submitted successfully!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>❌ There was a problem submitting.</p>}
    </form>
  )
}

export default PermitForm
