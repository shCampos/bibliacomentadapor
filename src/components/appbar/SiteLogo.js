import React from 'react'
import {
  Grid, TextField, Typography
} from '@material-ui/core'

import { styleObject } from '../../assets/styleObject.js'

export default function SiteLogo() {
  const classes = styleObject()

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item>
        <Typography variant="overline">
          A BÍBLIA COMENTADA POR
        </Typography>
      </Grid>
      <Grid>
        <TextField id="userName" helperText="seu nome aqui"/>
      </Grid>
    </Grid>
  )
}