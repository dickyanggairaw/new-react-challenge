import {useState, useEffect} from 'react'

function useFetch (url) {
  const [data, setDatas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect (() => {
    setLoading(true)
    fetch(url, {
      method: 'GET',
      headers: {
        "app-id": '60617f6bc94f68d6a87e63b3'
      }
    })
      .then(res => res.json())
      .then(res => {
        setDatas(res.data)
      })
      .catch(err => setError(err))
      .finally( _=> setLoading(false))
  }, [url])

  return {
    data,
    loading,
    error,
    setDatas
  }
}

export default useFetch