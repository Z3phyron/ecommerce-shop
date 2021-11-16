import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage'
import Home from '../pages/home/Home'
// import Homepage from '../pages/Homepage'
import Loginpage from '../pages/auth/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profilepage'
import Registerpage from '../pages/auth/Registerpage'
import ResetPasswordPage from '../pages/auth/ResetPasswordPage'
import TestPage from '../pages/TestPage'
import AddProducts from '../pages/admin/AddProducts'
import ProductDetails from '../pages/products/ProductDetails'

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/addproduct' component={AddProducts} />
          <Route exact path='/product/:id' component={ProductDetails} />
          <ProtectedRoute exact path='/signin' component={Loginpage} />
          <ProtectedRoute exact path='/signup' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute exact path='/test' component={TestPage} />
          <ProtectedRoute
            exact
            path='/forgot-password'
            component={ForgotPasswordPage}
          />
          <ProtectedRoute
            exact
            path='/reset-password'
            component={ResetPasswordPage}
          />
          <Route exact path='*' component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  )
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth()
  const { path } = props
  console.log('path', path)
  const location = useLocation()
  console.log('location state', location.state)

  if (
    path === '/signin' ||
    path === '/signup' ||
    path === '/forgot-password' ||
    path === '/reset-password'
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? '/profile'} />
    ) : (
      <Route {...props} />
    )
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/signin',
        state: { from: path },
      }}
    />
  )
}
