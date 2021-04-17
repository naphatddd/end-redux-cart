import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import CategroyList from './CategoryList'
import ProductItem from './ProductItem'
import { makeStyles } from '@material-ui/core/styles'
import querystring from 'query-string'
import * as productActions from '../actions'
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
  },
}))
function ProductList() {
  const classes = useStyles()
  const { search } = useLocation()
  const dispatch = useDispatch()
  const { category } = querystring.parse(search)
  const { isLoading, items: products } = useSelector((state) => state.products)

  useEffect(() => {
    const action = productActions.loadProducts(search)
    dispatch(action)
  }, [dispatch, search])
  return (
    <>
      <Typography variant="h2" component="h1" className={classes.root}>
        {category || 'All'} Products
      </Typography>
      <CategroyList />
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductItem key={product.id} {...product}></ProductItem>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ProductList
