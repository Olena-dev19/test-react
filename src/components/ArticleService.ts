import axios from 'axios';
import type { Article } from './App';

interface ArticlesHttpResponse {
  hits: Article[];
}

export const fetchArticles = async (topic: string): Promise<Article[]> => {
  const {
    data: { hits },
  } = await axios.get<ArticlesHttpResponse>(
    `https://hn.algolia.com/api/v1/search?query=${topic}`,
  );
  return hits;
};
