import React from 'react'
import { Container, Snackbar, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Routes from './Routes'
const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
  },
}))
function Content() {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar />
        <Routes />
        <Snackbar
          open
          message="Helloworld"
          action={
            <Button color="inherit" size="small">
              Close
            </Button>
          }
        ></Snackbar>
      </Container>
    </main>
  )
}

export default Content
