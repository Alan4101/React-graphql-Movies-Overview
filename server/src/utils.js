import { BASE_URL, API_KEY } from "../src/config/index";

export const createUrl = (endpoint, language = "en-US", page) => {
  if (page) {
    return `${BASE_URL}${endpoint}api_key=${API_KEY}&language=${language}&page=${page}`;
  } else {
    return `${BASE_URL}${endpoint}api_key=${API_KEY}&language=${language}`;
  }
};


