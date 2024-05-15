export const fetchCharacters = async (name = '', status = '', page = 1) => {
  try {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`

    if (name) {
      url += `&name=${name}`
    }

    if (status) {
      url += `&status=${status}`
    }

    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
