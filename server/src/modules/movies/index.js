const axios = require('axios')
const key = 'f6b1fc60dfa4b565e46025dc0de1fa24'
const url = `https://api.themoviedb.org/3/movie/popular?api_key=f6b1fc60dfa4b565e46025dc0de1fa24`
const getPopular = async () => {
  const res = await axios.get(url)
  return res.data
}

module.exports = {
  getPopular
}