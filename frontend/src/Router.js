import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Foods from './components/Foods'
import FoodDetail from './components/FoodDetail'
import FoodCreate from './components/FoodCreate'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/foods" component={Foods} />
      <Route exact path="/foods/:id" component={FoodDetail} />
      <Route exact path="/create" component={FoodCreate} />
    </Switch>
  </BrowserRouter>
)

export default Router
