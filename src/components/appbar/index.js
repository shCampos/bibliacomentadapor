import React from 'react'
import {
  ButtonGroup,
  Grid,
  IconButton,
  Paper,
} from '@material-ui/core'
import {
  Brightness4Outlined,
  HomeOutlined,
  SettingsOutlined,
} from '@material-ui/icons'
import { styleObject } from '../../assets/styleObject.js'

import ChooseTextForm from './ChooseTextForm'
import SiteLogo from './SiteLogo'

export default function Appbar(props) {
  const { setCurrentVersion, toogleDarkMode } = props
  const classes = styleObject()

  return (
    <Paper className={classes.appBar} elevation={3}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <SiteLogo/>
        </Grid>
        <Grid item>
          <ChooseTextForm setCurrentVersion={setCurrentVersion}/>
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
    </Paper>
  )
}