const {getPopular } = require('../modules/movies/index');

const movies = async (parent, args) => await getPopular(args.page);

module.exports = { movies}