import React from 'react'
import {
  Grid,
  Paper
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { styleObject } from '../../assets/styleObject.js'

export default function Welcome(props) {
  const { setCurrentParameters, toogleDarkMode, openCollapse, setOpenCollapse} = props
  const classes = styleObject()

  const handleOpenChange = () => {
    setOpenCollapse(!openCollapse)
  }

  return (
    <Paper className={classes.welcome}>
      <Grid container style={{height: '100%'}} direction="column" alignItems="center" justify="center">
        <Grid item>
          logo aqui
        </Grid>
        <Grid item>
          {
            (openCollapse)?(
              <ExpandLess onClick={handleOpenChange}/>
            ):(
              <ExpandMore onClick={handleOpenChange}/>
            )
          }
        </Grid>
      </Grid>
    </Paper>
  )
}