import React, { useEffect, useState } from 'react'
import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core'

import { styleObject } from '../../assets/styleObject.js'
import { getVersions } from '../../utils/bibliaDigitalService.js'

export default function ChooseTextForm(props) {
  const { setCurrentParameters } = props
  const classe = styleObject()

  const [ allVersions, setAllVersions ] = useState([{version: 'Loading...'}])
  useEffect(() => {
    getVersions((res) => setAllVersions(res))
  }, [])
  
  return (
    <Grid container direction="row" alignItens="center" spacing={1}>
      <Grid item>
        <FormControl>
          <Select id="version" defaultValue={'acf'} onChange={setCurrentParameters} size="small">
            {
              allVersions.map((v) => 
                <MenuItem value={v.version} >{v.version.toUpperCase()}</MenuItem>
              )
            }
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