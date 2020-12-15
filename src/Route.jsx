import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'

import Login from './Pages/Login/Login'
import UserId from './Pages/UserId/UserId'
import Modal from './Pages/Modal/modal'
import Modal2 from './Pages/Modal2/modal'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/user/:id' component={UserId} />
        <Route exact path='/modal' component={Modal} />
        <Route exact path='/modal2' component={Modal2} />
      </Switch>
    </BrowserRouter>
  )
}
