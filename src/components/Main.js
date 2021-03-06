import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product/Product'
import Cart from './Cart'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path = '/product' component= {Product}/>
      <Route path='/cart' component={Cart}/>
    </Switch>
  </main>
)

export default Main
