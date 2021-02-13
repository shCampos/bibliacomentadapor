import React from 'react'
import {
  Grid,
  Paper,
  Typography
} from '@material-ui/core'

import { styleObject } from '../../assets/styleObject.js'
import SetParamsForm from './SetParamsForm.js'

export default function Biblia(props) {
  const { currentParameters, setCurrentParameters } = props
  const classes = styleObject()
  
  return (
    <Paper className={classes.middleContainers} elevation={3}>
      <Grid container direction="column">
        <Grid item>
          <SetParamsForm currentParameters={currentParameters} setCurrentParameters={setCurrentParameters}/>
        </Grid>
        <Grid item>
          <Typography variant="h6">LIVRO 4</Typography>
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
        </Grid>
      </Grid>
      
    </Paper>
  )
}