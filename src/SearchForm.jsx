import { useGlobalContext } from "./Context";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value; //accessing the value
    if (!searchValue) return; //if nothing is submitted return nothing
    setSearchTerm(searchValue); //else pass the submitted value
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="type"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
}
