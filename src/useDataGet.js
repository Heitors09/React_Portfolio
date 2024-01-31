import { useState, useEffect } from "react";
export function useDataGet(url) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function dataGet() {
      const response = await fetch(url);
      const json = await response.json();

      if (!ignore) {
        setdata(json);
      }
    }

    dataGet();

    return () => {
      ignore = true;
    };
  }, [url]);

  return data;
}
