import axios from "axios";

import { Credits } from "../entities";
import { createUrl } from '../utils/utils';

/**
 *
 * @param movieId - selected movieId
 * @param {*} language
 * @returns all cast
 */
const getCredits = async (movieId, language) => {
  const { data } = await axios.get(
    `${createUrl(`movie/${movieId}/credits?`, language)}`
  );
  return new Credits(data);
};

export {
  getCredits,
};