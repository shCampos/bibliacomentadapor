import React, { useState } from 'react'
import {
  ButtonGroup,
  Collapse,
  Grid,
  IconButton,
  Paper,
} from '@material-ui/core'
import {
  Brightness4Outlined,
  ExpandLess,
  ExpandMore,
  HomeOutlined,
  SettingsOutlined,
} from '@material-ui/icons'
import { styleObject } from '../../assets/styleObject.js'

import SetParamsForm from '../biblia/SetParamsForm'
import SiteLogo from './SiteLogo'

export default function Welcome(props) {
  const { currentParameters, setCurrentParameters, toogleDarkMode, openCollapse, setOpenCollapse} = props
  const classes = styleObject()

  const handleOpenChange = () => {
    setOpenCollapse(!openCollapse)
  }

  return (
    <Paper className={classes.welcomePaper} elevation={3}>
      <Collapse in={openCollapse} collapsedHeight={48}>
        <div className={classes.welcomeContent}>
          <Grid container direction="row" alignItems="center" justify="space-between">
            <Grid item>
              <IconButton className={classes.welcomeIcon} onClick={toogleDarkMode}>
                <Brightness4Outlined/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.welcomeIcon} onClick={handleOpenChange}>
                {
                  (openCollapse)?(
                    <ExpandLess/>
                  ):(
                    <ExpandMore/>
                  )
                }
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.welcomeIcon} disabled>
                <SettingsOutlined/>
              </IconButton>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center" justify="space-between">
            <Grid item>
              <SiteLogo/>
            </Grid>
            <Grid item>
              sobre  
            </Grid>
          </Grid>
        </div>
      </Collapse>
    </Paper>
  )
}