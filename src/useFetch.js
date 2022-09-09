// Custom  Hooks needs to start with the word USE
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();
    fetch(url, { signal: abortConst.signal })
      /* This turns the json file into a javascript array*/
      .then((response) => {
        if (!response.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return response.json();
      })
      /* the data below is not the same as the state data, it is a local version and it doesn't matter that they have the same name */
      .then((data) => {
        //console.log(data);
        setData(data);
        setIsPending(false);
        setError(null); //If we had an error before it should be reset to null if we manage to load
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(error.message);
          console.log(error);
          setIsPending(false); //So that there won't be a loading message on screen if we recieve an error
        }
      });
    return () => abortConst.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
