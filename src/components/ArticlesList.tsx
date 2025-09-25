import React from 'react';
import type { Article } from './App';

export default function ArticlesList({ items }: { items: Article[] }) {
  return (
    <ul>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
