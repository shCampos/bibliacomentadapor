import React from 'react'
import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core'

import { styleObject } from '../../assets/styleObject.js'

export default function chooseTextForm(props) {
  const { setCurrentVersion } = props
  const classe = styleObject()

  return (
    <Grid container direction="row" alignItens="center" spacing={1}>
      <Grid item>
        <FormControl>
          <Select id="version" // value={age}
            defaultValue={'nvi'} onChange={setCurrentVersion} size="small">
            <MenuItem value={'nvi'} selected>NVI</MenuItem>
            <MenuItem value={'ntlh'}>NTLH</MenuItem>
          </Select>
          <FormHelperText>VERSÃO</FormHelperText>
        </FormControl>        
      </Grid>
      <Grid item>
        <TextField id="booksName" helperText="LIVRO"  size="small"/>
      </Grid>
      <Grid item>
        <TextField id="chapterNumber" helperText="CAPÍTULO" type="number" size="small"/>
      </Grid>
    </Grid>
  )
}