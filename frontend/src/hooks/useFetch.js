import axios from 'axios'
import { useEffect, useState } from 'react'
import { Request } from '../axiosInstance'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    
    useEffect(() => {
        const source = axios.CancelToken.source();
        (async() => {
            setisLoading(true);
            try {
                const {data} = await Request.get(url, {cancelToken: source.token})
                setData(data)
                isLoading(false)
            } catch (error) {
                if(error.isCancel) return
                console.log(error)
                isLoading(false)
                setError(error.response.data.message)
            }
        })()

        return () => {
            source.cancel()
        }
    }, [url])
    
  return { data, isLoading, error }
}

export default useFetch