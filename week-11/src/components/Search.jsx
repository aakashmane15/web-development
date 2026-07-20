import { useSearch } from "../hooks/useSearch";

export function Search() {
  const { debounceFunction } = useSearch();

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={debounceFunction}
        />
      </div>
    </>
  );
}
