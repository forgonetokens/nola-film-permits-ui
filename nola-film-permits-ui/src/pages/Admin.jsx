import { useEffect, useState } from 'react'
import axios from 'axios'

const Admin = () => {
  const [permits, setPermits] = useState([])

  useEffect(() => {
    const fetchPermits = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/permits`)
        setPermits(res.data.permits || res.data)
      } catch (err) {
        console.error('Error fetching permits:', err)
      }
    }

    fetchPermits()
  }, [])

  const updateStatus = (index, status) => {
    const updated = [...permits]
    updated[index].status = status
    setPermits(updated)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Panel</h2>
      {permits.length === 0 ? (
        <p>No permits submitted yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Project</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {permits.map((permit, i) => (
              <tr key={i}>
                <td>{permit.projectName}</td>
                <td>{permit.status}</td>
                <td>
                  <button onClick={() => updateStatus(i, 'approved')}>Approve</button>{' '}
                  <button onClick={() => updateStatus(i, 'rejected')}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Admin
