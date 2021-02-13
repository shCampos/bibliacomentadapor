import React from 'react'
import {
  Paper,
  Typography
} from '@material-ui/core'

import { styleObject } from '../../assets/styleObject.js'

export default function Biblia() {
  const classes = styleObject()

  return (
    <Paper className={classes.middleContainers}>
      <Typography variant="h6">livro</Typography>
    </Paper>
  )
}