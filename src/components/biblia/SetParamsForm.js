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
  const { currentParameters, setCurrentParameters } = props
  const classe = styleObject()

  const [ allVersions, setAllVersions ] = useState([{version: '...'}])
  const [ allBooks, setAllBooks ] = useState([{name: 'Carregando...'}])

  useEffect(() => {
    getVersions((res) => setAllVersions(res))
    getAllBooks((res) => setAllBooks(res))
  }, [])
  
  return (
    <Grid container fullWidth direction="row" justify="space-between" spacing={1}>
      <Grid item>
        <Grid container diretion="row" spacing={1}>
          <Grid item>
            <Autocomplete
              id="booksName" helperText="LIVRO" size="small"
              options={allBooks}
              getOptionLabel={(option) => option.name}
              style={{ width: 180 }}
              renderInput={(params) => <TextField {...params}/>}
              onChange={
                (e, newValue) => {
                  (newValue.abbrev)&&(
                    setCurrentParameters({
                      ...currentParameters,
                      bookAbbrev: newValue.abbrev.pt,
                      bookChapters: newValue.chapters,
                      currentChapter: 1
                    })
                  )
                }
              }
            />
          </Grid>
          <Grid item>
            <TextField
              id="chapterNumber"
              helperText="CAPÍTULO"
              type="number"
              size="small"
              style={{ width: 80 }}
              value={currentParameters.currentChapter}
              onChange={(e) => setCurrentParameters({...currentParameters, currentChapter: e.target.value})}
              InputProps={{
                inputProps: { min: 1, max: currentParameters.bookChapters }
              }}
            />
          </Grid>

        </Grid>
      </Grid>
      <Grid item>
        <FormControl>
          <Select
            id="version"
            defaultValue={currentParameters.version}
            size="small"
            onChange={
              e => setCurrentParameters({...currentParameters, version: e.target.value})
            }
          >
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
    </Grid>
  )
}