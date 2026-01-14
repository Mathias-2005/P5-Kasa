import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from '../src/pages/ErrorPage'
import About from '../src/pages/About'
import Accommodation from '../src/pages/Accommodation'
import App from '../src/layout/App'
import Home from '../src/pages/Home'

// TABLEAU AVEC TOUT LES CHILDREN 
const childrenRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/accommodation/:id', element: <Accommodation /> },
  { path: '/404', element: <ErrorPage /> },
  { path: '*', element: <Navigate to="/404" /> }
]

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<App />}>
            {childrenRoutes.map((route, index) => (
              <Route 
                key={index} 
                path={route.path} 
                element={route.element} 
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing;