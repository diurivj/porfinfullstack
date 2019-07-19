import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Foods from './components/Foods'
import FoodDetail from './components/FoodDetail'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/foods" component={Foods} />
      <Route exact path="/foods/:id" component={FoodDetail} />
    </Switch>
  </BrowserRouter>
)

export default Router
