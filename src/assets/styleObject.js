import { makeStyles } from '@material-ui/core/styles'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
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
    }
  },
  root: {
    flexGrow: 1,
    width: width,
    minWidth: width,
    maxWidth: width,
    minHeight: height-48,
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: theme.palette.background
  }
}))