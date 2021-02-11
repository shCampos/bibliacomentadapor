import React from 'react'
import { Grid } from '@material-ui/core'

export default function Appbar() {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item>
        Logo
      </Grid>
      <Grid item>
        escolher passagem
      </Grid>
      <Grid item>
        dropdown configurações
      </Grid>
    </Grid>
  )
}