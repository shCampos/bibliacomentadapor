const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlNhdCBGZWIgMTMgMjAyMSAyMTozODowNiBHTVQrMDAwMC42MDI4NDVhOWJlM2VhNTAwMjM1MGMxMDgiLCJpYXQiOjE2MTMyNTIyODZ9.ReJifZ_TtS8Z9mwWtZ1Krtqjrcmko-Gw2FwBKKT5FDE'
  }
}

export function getVersions(returnResult) {
  fetch('https://www.abibliadigital.com.br/api/versions', requestOptions)
  .then(res => res.json())
  .then(
    (result) => {
      returnResult(result)
    },
    (err) => {
      console.log(err)
    }
  )
}

export function getAllBooks(returnResult) {
  fetch('https://www.abibliadigital.com.br/api/books', requestOptions)
  .then(res => res.json())
  .then(
    (result) => {
      returnResult(result)
    },
    (err) => {
      console.log(err)
    }
  )
}

export function getBookByAbbrev(abbrev) {

}

export function getBookChapter(version, abbrev, chapterNumber) {

}