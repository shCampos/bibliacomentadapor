import React, { useEffect, useState } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import {
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@material-ui/core'
import { themeObject } from './assets/themeObject.js'
import { styleObject } from './assets/styleObject.js'

import Biblia from './components/biblia'
import Comments from './components/comments'
import Appbar from './components/Appbar'

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject)
  const { 
    palette: { type }
  } = theme
  const toogleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light'?'dark':'light'
      }
    }
    localStorage.setItem('@bibliacomentadapor/theme', updatedTheme.palette.type)
    setTheme(updatedTheme)
  }
  return [theme, toogleDarkMode]
}

export default function App() {
  const [theme, toogleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme)
  useEffect(() => {
    const userTheme = localStorage.getItem('@bibliacomentadapor/theme')
    userTheme==='dark'&&toogleDarkMode()
  }, [])
  const classes = styleObject()

  const { currentVersion, setCurrentVersion } = useState('')
  const { currentBookAbbrev, setCurrentBookAbbrev } = useState('')
  const { currentChapterNumber, setCurrentChapterNumber } = useState(null)
  const { currentChapterText, setCurrentChapterText } = userState(null)
  const { userComments, setUserComments } = userState({})
  //verificar se já tem no localstorage
  
  return (
    <ThemeProvider theme={themeConfig}>
    <CssBaseline/>
      <div style={{width: '100%', display: 'flex'}} className={classes.root}>
        <Grid container direction="column">
          <Grid item>
            <Appbar/>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid row>
                <Biblia/>
              </Grid>
              <Grid row>
                <Comments/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}
