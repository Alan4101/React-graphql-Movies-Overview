const axios = require('axios')
const { API_KEY } = require('../../config')
const {Movies} = require('./entities/Movies')

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`

const MoviesSchema = require("../../models/Movies.model")

const getPopular = async (page) => {
  const pageNumber = `&page=${page}` 
  const {data} = await axios.get(url+pageNumber)

  return new Movies(data) 
}

const getMovies = async () => {
  const data = await MoviesSchema.find({}); 
  console.log(data)
  return data
}

module.exports = {
  getPopular,
  getMovies
}