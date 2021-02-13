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

import SetParamsForm from './SetParamsForm'
import SiteLogo from './SiteLogo'
import Welcome from './Welcome'

export default function Appbar(props) {
  const { currentParameters, setCurrentParameters, toogleDarkMode, openCollapse, setOpenCollapse} = props
  const classes = styleObject()

  const handleOpenChange = () => {
    setOpenCollapse(!openCollapse)
  }

  return (
    <Collapse in={openCollapse} collapsedHeight={119}>
      <Paper className={classes.appBar} elevation={3} style={{height: openCollapse?'100%':'119px'}}>
        <Grid container direction={openCollapse?'column':'row'} justify="space-between" alignItems="center">
          <Grid item>
            <SiteLogo/>
          </Grid>
          <Grid item>
            <SetParamsForm currentParameters={currentParameters} setCurrentParameters={setCurrentParameters}/>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <IconButton color="primary" disabled>
                <HomeOutlined/>
              </IconButton>
              <IconButton color="primary" onClick={toogleDarkMode}>
                <Brightness4Outlined/>
              </IconButton>
              <IconButton color="primary" disabled>
                <SettingsOutlined/>
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>

        <Grid container direction="row" alignItems="center" justify="center">
          {
            (openCollapse)?(
              <ExpandLess onClick={handleOpenChange}/>
            ):(
              <ExpandMore onClick={handleOpenChange}/>
            )
          }
        </Grid>
      </Paper>
    </Collapse>
  )
}