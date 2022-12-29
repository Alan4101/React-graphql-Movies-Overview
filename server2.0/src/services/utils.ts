import * as dotenv from "dotenv";

dotenv.config();

export const createUrlString = (
  endpoint: string,
  language: string = "en-US",
  page?: number
): string => {
  if (page) {
    return `${process.env.BASE_URL!}${endpoint}api_key=${process.env
      .API_KEY!}&language=${language}&page=${page}`;
  } else {
    return `${process.env.BASE_URL!}${endpoint}api_key=${process.env
      .API_KEY!}&language=${language}`;
  }
};
