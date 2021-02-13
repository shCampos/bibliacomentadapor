import React from 'react'
import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  OutlinedInput,
  TextField,
  Typography
} from '@material-ui/core'

import { styleObject } from '../../assets/styleObject.js'

export default function SiteLogo() {
  const classes = styleObject()

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4">
          A BÍBLIA <br/>COMENTADA POR <br/>
          
          <OutlinedInput id="userName" placeholder="você!" style={{ fontSize: '24px' }}/>
        </Typography>
      </Grid>
    </Grid>
  )
}