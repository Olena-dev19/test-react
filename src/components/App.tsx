// src/components/App.tsx

import axios from 'axios';
import { useEffect, useState } from 'react';
// import OrderForm from './OrderForm';
// import SearchForm from './SearchForm';
// import ArticlesList from './ArticlesList';
// import { fetchArticles } from './ArticleService';
// import OrderForm2 from './OrderForm2';

// interface Values {
//   x: number;
//   y: number;
// }

// export interface Article {
//   objectID: string;
//   title: string;
//   url: string;
// }

// export default function App() {
//   const [values, setValues] = useState<Values>({ x: 0, y: 0 });
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const updateValue = (key: keyof Values) => {
//     setValues({
//       ...values,
//       [key]: values[key] + 1,
//     });
//   };
//   const handleOrder = (data: string) => {
//     console.log('Order placed:', data);
//   };
//   const handleSearch = async (topic: string) => {
//     try {
//       setIsLoading(true);
//       setIsError(false);
//       const hits = await fetchArticles(topic);
//       setArticles(hits);
//     } catch {
//       setIsError(true);
//       alert('Something went wrong. Try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x} | y: {values.y}
//       </p>
//       <button onClick={() => updateValue('x')}>Update x</button>
//       <button onClick={() => updateValue('y')}>Update y</button>

//       <h1>Place your order</h1>
//       <OrderForm onSubmit={handleOrder} />

//       <SearchForm onSubmit={handleSearch} />
//       {isError && <p>Whoops, something went wrong! Please try again!</p>}
//       {articles.length > 0 && <ArticlesList items={articles} />}
//       {isLoading && <p>Loading...</p>}
//       <OrderForm2 />
//     </div>
//   );
// }

export default function App() {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    // 1. Оголошуємо асинхронну функцію
    async function fetchCharacter() {
      const response = await axios.get(
        `https://swapi.info/api/people/${count}`,
      );
      setPerson(response.data);
    }

    // 2. Викликаємо її одразу після оголошення
    fetchCharacter();
  }, [count]);

  return (
    <>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Get next character</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
