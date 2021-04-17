import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductRoute from 'modules/products/components/Routes'
import CartRoute from 'modules/cart/components/Routes'

function Routes() {
  return (
    <Switch>
      <Route path="/products">
        <ProductRoute />
      </Route>
      <Route path="/cart">
        <CartRoute />
      </Route>
      <Route exact path="/"></Route>
    </Switch>
  )
}

export default Routes
