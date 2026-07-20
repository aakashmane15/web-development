import { useDebounce } from "./useDebounce";

export function useSearch() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debounceFunction = useDebounce(sendDataToBackend);

  return { debounceFunction };
}
