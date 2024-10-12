import './App.css'
import UserForm from './components/userForm'
import Dashboard from './components/dashboard'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
