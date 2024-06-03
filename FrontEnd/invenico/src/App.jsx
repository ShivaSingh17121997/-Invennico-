
import './App.css'
// import Home from './Pages.jsx/Home'
// import FormPage from './Pages.jsx/FormPage'
import Navbar from './Components/Navbar'
import AllRoutes from './Pages.jsx/AllRoutes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Navbar />
      <AllRoutes />

      <ToastContainer />
    </div>
  )
}

export default App
