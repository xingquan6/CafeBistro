import { useEffect, useState } from 'react'

interface AsyncState<T> {
  data: T | null
  loading: boolean
}

export function useAsync<T>(fetcher: () => Promise<T>, deps: unknown[] = []): AsyncState<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    fetcher().then((result) => {
      if (active) {
        setData(result)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading }
}
