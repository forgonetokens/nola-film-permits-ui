import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Submit from './pages/Submit'
import View from './pages/View'
import Admin from './pages/Admin'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="submit" element={<Submit />} />
          <Route path="view" element={<View />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
