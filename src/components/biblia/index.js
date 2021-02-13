import React from 'react'
import {
  Paper,
  Typography
} from '@material-ui/core'

import { styleObject } from '../../assets/styleObject.js'

export default function Biblia() {
  const classes = styleObject()
  
  return (
    <Paper className={classes.middleContainers} elevation={3}>
      <Typography variant="h6">livro</Typography>
      {
        ['abc', 'dbsda', 'oihsdisd'].map((text, index) => {
          return (
           <Typography variant="body1">
             <sup>{index+1} </sup>
             {text}
           </Typography>
          )
        })
      }
    </Paper>
  )
}