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
      {
        ['abc', 'dbsda', 'oihsdisd'].forEach((text, index) => {
          console.log(index, text)
          return (
           <Typography variant="body2">
             <sup>{index} </sup>
             {text}
           </Typography>
          )
        })
      }
    </Paper>
  )
}