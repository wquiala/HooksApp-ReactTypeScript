import { useEffect, useRef, useState } from 'react';

export interface Resp {
  data: any;
  loading: boolean;
}

export interface BB {
  quote: string;
  author: string;
}

export const useFetch = <T extends Object>(url: string) => {
  const [state, setState] = useState<Resp>({
    data: null,
    loading: true,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = true;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            data,
          });
        }
      });
  }, [url]);

  return state;
};
