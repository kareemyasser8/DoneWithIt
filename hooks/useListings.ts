import { useEffect, useState } from "react"
import { List } from "@/app/api/listService"
import listService, { listServiceEndPoint } from "@/app/api/listService"
import cache from "@/utility/cache"

const useListings = () => {
  const [listings, setListings] = useState<List[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>()

  const getListings = async () => {
    setIsLoading(true)
    setError(false)

    try {
      const data = await cache.get(listServiceEndPoint)
      if (data) {
        setListings(data as List[])
      } else {
        try {
          const response = await listService.getAll()
          if (response) {
            cache.store(listServiceEndPoint, response)
            setListings(response as List[])
          }
        } catch (error) {
          setError(true)
        }
      }
    } catch (error) {
      setError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getListings()
  }, [])

  return {
    listings,
    getListings,
    isLoading,
    error,
  }
}

export default useListings
