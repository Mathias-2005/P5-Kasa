import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import About from '../pages/About'
import Accommodation from '../pages/Accommodation'
import App from '../layout/App'
import Home from '../pages/Home'

// TABLEAU AVEC TOUT LES CHILDREN DES ROUTES
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
      <BrowserRouter basename='/P5-Kasa'>
        <Routes> 
          {/* APP EST LA ROUTE PARENT */}
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