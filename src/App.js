import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import {
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core'
import { themeObject } from './assets/themeObject.js'
import { styleObject } from './assets/styleObject.js'

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

  return (
    <ThemeProvider theme={themeConfig}>
    <CssBaseline/>
      <div>
        works!
      </div>
    </ThemeProvider>
  )
}
