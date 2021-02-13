import React from 'react'
import {
  Paper, Typography
} from '@material-ui/core'

import { styleObject } from '../../assets/styleObject.js'

export default function Comments() {
  const classes = styleObject()

  return (
    <Paper className={classes.middleContainers} elevation={3}>
      <Typography variant="h6">Comentários</Typography>
    </Paper>
  )
}