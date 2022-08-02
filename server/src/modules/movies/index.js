const axios = require('axios')
const { API_KEY } = require('../../config')
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
const {Movies} = require('./entities/Movies')

const getPopular = async (page) => {
  const pageNumber = `&page=${page}` 
  const {data} = await axios.get(url+pageNumber)

  return new Movies(data) 
}


module.exports = {
  getPopular
}