import React, { useEffect, useState } from 'react'
import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';

import { styleObject } from '../../assets/styleObject.js'
import { getAllBooks, getVersions } from '../../utils/bibliaDigitalService.js'

export default function SetParamsForm(props) {
  const { setCurrentParameters } = props
  const classe = styleObject()

  const [ allVersions, setAllVersions ] = useState([{version: '...'}])
  const [ allBooks, setAllBooks ] = useState([{name: 'Carregando...'}])

  useEffect(() => {
    getVersions((res) => setAllVersions(res))
    getAllBooks((res) => setAllBooks(res))
  })
  
  return (
    <Grid container direction="row" alignItens="center" spacing={1}>
      <Grid item>
        <FormControl>
          <Select id="version" defaultValue={'acf'} onChange={setCurrentParameters} size="small">
            {
              (allVersions.length>0)&&(
                allVersions.map((v) => 
                  <MenuItem value={v.version} >{v.version.toUpperCase()}</MenuItem>
                )
              )
            }
          </Select>
          <FormHelperText>VERSÃO</FormHelperText>
        </FormControl>        
      </Grid>
      <Grid item>
        <Autocomplete
          id="booksName" helperText="LIVRO" size="small"
          options={allBooks}
          getOptionLabel={(option) => option.name}
          style={{ width: 180 }}
          renderInput={(params) => <TextField {...params}/>}
        />
      </Grid>
      <Grid item>
        <TextField id="chapterNumber" helperText="CAPÍTULO" type="number" size="small" InputProps={{ inputProps: { min: 0, max: 10 } }}/>
      </Grid>
    </Grid>
  )
}