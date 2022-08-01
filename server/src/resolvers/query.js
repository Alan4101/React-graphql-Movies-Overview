const {getPopular } = require('../modules/movies/index');

async function movies (parent, args) {
  const data = await getPopular()
  console.log(data)
  return {
    page: 1,
    totalResults: 10,
    totalPages: 12,
    results: [{
      id: 1,
      title: 'name',
      releaseDate: '45'
      
    }]
      

  }
}
module.exports = { movies}