import { useEffect, useState } from "react"
import { List } from "@/app/api/listService"
import listService from "@/app/api/listService"

const useListings = () => {
  const [listings, setListings] = useState<List[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>()

  const getListings = async () => {
    setIsLoading(true)
    setError(false)

    try {
      const response = await listService.getAll()
      setListings(response as List[])
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
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
