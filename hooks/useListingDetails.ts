import listService, { List } from "@/app/api/listService"
import { useEffect, useState } from "react"

const useListingDetails =  (id: string) => {
  const [listDetails, setListDetails] = useState<List>()
  const [loading, setLoading] = useState<boolean>()
  const [error, setError] = useState<boolean>()

  const getListingDetails = async () => {
    setLoading(true)
    setError(false)
    try {
      const response = await listService.getById(id)
      if (response) {
        setListDetails(response as List)
      }
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getListingDetails()
  }, [])

  return {
    listDetails,
    loading,
    error,
  }
}

export default useListingDetails
