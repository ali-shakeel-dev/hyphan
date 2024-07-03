import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Tools from "./pages/Tools"
import Contact from "./pages/Contact"
import Pomodoro from "./pages/Pomodoro"
import ToDoTasks from "./pages/ToDoTasks"
function App() {

  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/todo-tasks" element={<ToDoTasks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  )
}

export default App