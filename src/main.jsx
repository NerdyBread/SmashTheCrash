import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Contributor from './Contributor.jsx';
import Contributors from './Contributors.jsx';
import Home from './Home.jsx'
import Report from './Report.jsx'
import Navigation from './components/Navigation.jsx';

/**
 * I wonder if there is a better way to make multiple routes point to the same place
 */

const IDs = [0, 1, 2, 3, 4]

// There is probably a better way to do this routing
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='home' element={<Home />}></Route>
      <Route path='projects/0' element={<Home />}></Route>
      <Route path='report' element={<Report />}></Route>
      <Route path='contributors' element={<Contributors/>}></Route>
      <Route path='contributors/:uid' element={<Contributor/>}></Route>
    </Routes>
  </BrowserRouter>
)