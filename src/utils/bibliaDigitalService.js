export function getVersions(setVersion) {
  fetch('https://www.abibliadigital.com.br/api/versions')
  .then(res => res.json())
  .then(
    (result) => {
      setVersion(result)
    },
    (err) => {
      console.log(err)
    }
  )
}

export function getSAllBooks() {

}

export function getBookByAbbrev(abbrev) {

}

export function getBookChapter(version, abbrev, chapterNumber) {

}