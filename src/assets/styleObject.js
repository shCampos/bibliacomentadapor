import { makeStyles } from '@material-ui/core/styles'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  }
}

const { height, width } = getWindowDimensions()

export const styleObject = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.5em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
    },
    'input::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    'input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    }
  },
  root: {
    flexGrow: 1,
    width: width,
    minWidth: width,
    maxWidth: width,
    minHeight: height,
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: '#0E345E'
  },
  welcomePaper: {
    padding: '0px 20px',    
    backgroundColor: theme.palette.background.paper,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  welcomeContent: {
    height: height-5,
    color: '#1E5878'
  },
  welcomeIcon: {
    color: '#1E5878'
  },
  middleContainers: {
    width: '100%',
    minHeight: height-50,
    padding: '20px 20px',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
}))