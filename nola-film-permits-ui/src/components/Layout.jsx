import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/submit">Submit</Link>
          <Link to="/view">View</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
