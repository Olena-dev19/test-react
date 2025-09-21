const books: Book[] = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Query overview' },
];

interface Book {
  id: string;
  name: string;
}

export default function Book() {
  return (
    <>
      <h1>Books of the week</h1>
      <ul>
        {books.map((book, index: number) => (
          <li key={index}>{book.name}</li>
        ))}
      </ul>
    </>
  );
}
