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
import Appbar from './components/appbar'

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

  const [ openCollapse, setOpenCollapse ] = useState(false)
  const [ currentParameters, setCurrentParameters ] = useState({
    version: 'acf',
  })
  //const [ currentBookAbbrev, setCurrentBookAbbrev ] = useState('')
  //const [ currentChapterNumber, setCurrentChapterNumber ] = useState(null)
  //const [ currentChapterText, setCurrentChapterText ] = useState(null)
  //const [ userComments, setUserComments ] = useState({})
  //verificar se já tem no localstorage

  return (
    <ThemeProvider theme={themeConfig}>
    <CssBaseline/>
      {/* <div style={{width: '100%', display: 'flex'}} className={classes.root}> */}
      <div  className={classes.root}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Appbar
              currentParameters={currentParameters}
              setCurrentParameters={setCurrentParameters}
              toogleDarkMode={toogleDarkMode}
              openCollapse={openCollapse}
              setOpenCollapse={setOpenCollapse}
            />
          </Grid>
          {(!openCollapse)&&(<Grid item>
            <Grid container direction="row" justify="center" spacing={2}>
              <Grid item xs={6} style={{paddingBottom: 0}}>
                <Biblia/>
              </Grid>
              <Grid item xs={6} style={{paddingBottom: 0}}>
                <Comments className={classes.middleContainers}/>
              </Grid>
            </Grid>
          </Grid>)}
        </Grid>
      </div>
    </ThemeProvider>
  )
}
