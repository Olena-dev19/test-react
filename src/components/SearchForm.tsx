interface SearchFormProps {
  onSubmit: (value: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSearch = (formData: FormData) => {
    const topic = formData.get('search') as string;

    if (topic === '') {
      alert('Please enter search topic!');
      return;
    }
    onSubmit(topic);
  };
  return (
    <form action={handleSearch}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
}
