import React from 'react'
import {
  TextField,
  CardActions,
  Card,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  form: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  submitBtn: {
    flex: 1,
  },
}))

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
})
function Delivery() {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const nameField = register('name')
  const emailField = register('email')
  const addressField = register('address')

  return (
    <form onSubmit={handleSubmit((e) => console.log(e))} autoComplete="off">
      <Card>
        <CardContent className={classes.form}>
          <Typography>Order Information</Typography>
          <TextField
            inputRef={nameField.ref}
            variant="outlined"
            name={nameField.name}
            onChange={nameField.onChange}
            label="name"
            placeholder="Enter your name"
            fullWidth
            helperText={errors.name?.message || ''}
            error={!!errors.name}
          />
          <TextField
            inputRef={emailField.ref}
            variant="outlined"
            name={emailField.name}
            onChange={emailField.onChange}
            label="email"
            placeholder="Enter your email"
            fullWidth
            helperText={errors.email?.message || ''}
            error={!!errors.email}
          />
          <TextField
            inputRef={addressField.ref}
            multiline
            rows={4}
            variant="outlined"
            name={addressField.name}
            onChange={addressField.onChange}
            label="address"
            placeholder="Enter your address"
            fullWidth
            helperText={errors.address?.message || ''}
            error={!!errors.address}
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            Place Order
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}

export default Delivery
