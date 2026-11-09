import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { DetailLogement } from './components/detailLogement/DetailLogement'
import { Error } from './pages/error/Error'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/:id' element={<DetailLogement />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
