import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Submit from './pages/Submit'
import View from './pages/View'
import Admin from './pages/Admin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Redirect root (/#/) to /submit */}
          <Route index element={<Navigate to="/submit" />} />
          <Route path="submit" element={<Submit />} />
          <Route path="view" element={<View />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
