import { useEffect, useState } from 'react'
import axios from 'axios'

const PermitTable = () => {
  const [permits, setPermits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPermits = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/permits`)
        setPermits(res.data.permits || res.data) // handle both array or wrapped data
      } catch (err) {
        console.error('Error fetching permits:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPermits()
  }, [])

  if (loading) return <p>Loading permits...</p>
  if (permits.length === 0) return <p>No permits submitted yet.</p>

  return (
    <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Project</th>
          <th>Contact</th>
          <th>Date</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {permits.map((permit, i) => (
          <tr key={i}>
            <td>{permit.projectName}</td>
            <td>{permit.contactName}</td>
            <td>{permit.shootDate}</td>
            <td>{permit.location}</td>
            <td>{permit.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PermitTable
