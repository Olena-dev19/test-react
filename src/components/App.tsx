// src/components/App.tsx

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Timer from './Timer';
// import Modal from './Modal';
// import OrderForm from './OrderForm';
// import ArticlesList from './ArticlesList';
// import OrderForm2 from './OrderForm2';
// import SearchForm from './SearchForm';
// import { fetchArticles } from './ArticleService';
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
import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchArticles } from './FetchArticles';
import ReactPaginate from 'react-paginate';
import SearchForm2 from './SearchForm2';

import css from './App.module.css';
import ArticleList2 from './ArticleList2';
// import axios from 'axios';

// const fetchCharacter = async (id: string) => {
//   const response = await axios.get(`https://swapi.info/api/people/${id}`);
//   return response.data;
// };

// export default function App() {
//   const [characterId, setCharacterId] = useState('');

//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ['character', characterId],
//     queryFn: () => fetchCharacter(characterId),
//     enabled: characterId !== '',
//   });

//   const handleSearch = (formData: FormData) => {
//     const id = formData.get('id') as string;
//     setCharacterId(id);
//   };

//   return (
//     <>
//       <form action={handleSearch}>
//         <input type="text" name="id" placeholder="Enter character ID" />
//         <button type="submit">Search</button>
//       </form>
//       {isLoading && <p>Loading data, please wait...</p>}
//       {isError && <p>Whoops, something went wrong! {error?.message}</p>}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </>
//   );
// }
export default function App() {
  const [topic, setTopic] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['articles', topic, currentPage],
    queryFn: () => fetchArticles(topic, currentPage),
    enabled: topic !== '',
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.nbPages ?? 0;

  const handleSearch = async (newTopic: string) => {
    setTopic(newTopic);
    setCurrentPage(1);
  };

  return (
    <>
      <SearchForm2 onSubmit={handleSearch} />
      {isSuccess && totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setCurrentPage(selected + 1)}
          forcePage={currentPage - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {data && data.hits.length > 0 && <ArticleList2 items={data.hits} />}
    </>
  );
}
// export default function App() {
//   // const [values, setValues] = useState<Values>({ x: 0, y: 0 });
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

// export default function App() {
//   const [count, setCount] = useState(1);
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     // 1. Оголошуємо асинхронну функцію
//     async function fetchCharacter() {
//       const response = await axios.get(
//         `https://swapi.info/api/people/${count}`,
//       );
//       setPerson(response.data);
//     }

//     // 2. Викликаємо її одразу після оголошення
//     fetchCharacter();
//   }, [count]);

//   return (
//     <>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// export default function App() {
//   // const [clicks, setClicks] = useState(0);

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Hide timer' : 'Show timer'}
//       </button>
//       {isOpen && <Timer />}
//     </>
//   );
// }

// export default function App() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   const openModal = () => setIsOpenModal(true);
//   const closeModal = () => setIsOpenModal(false);
//   return (
//     <div>
//       <h1>Main content of the page</h1>
//       <button onClick={openModal}>Open Modal</button>
//       {isOpenModal && (
//         <Modal onClose={closeModal}>
//           <h2>Custom Modal Content</h2>
//           <p>This is a reusable modal with dynamic content.</p>
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   const [clicks, setClicks] = useState(() => {
//     // Зчитуємо значення за ключем
//     const savedClicks = window.localStorage.getItem('saved-clicks');

//     // Якщо там щось є, повертаємо це
//     // значення як початкове значення стану
//     if (savedClicks !== null) {
//       return JSON.parse(savedClicks);
//     }

//     // У протилежному випадку повертаємо
//     // яке-небудь значення за замовчуванням
//     return 0;
//   });

//   useEffect(() => {
//     localStorage.setItem('saved-clicks', JSON.stringify(clicks));
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// }
// export default function App() {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log('First updated:', first);
//   }, [first]);

//   useEffect(() => {
//     console.log('Second updated:', second);
//   }, [second]);

//   useEffect(() => {
//     console.log('First or second updated:', first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// }
