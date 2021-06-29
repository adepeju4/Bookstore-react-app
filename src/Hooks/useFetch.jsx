import {useEffect, useState} from 'react'




const useFetch = (url) => {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    


    useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {

          if (!res.ok) {
            throw Error('Unable to fetch data')
          }
          return res.json()
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch(err => {
          setLoading(false);
          setError(err.message);
      })
    }, 1000);
    }, [url]);
    return {
        data,
        loading,
        error
    }
}

export default useFetch;