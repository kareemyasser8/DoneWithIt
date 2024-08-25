import { ListingForm } from "@/app/(tabs)/listingEditing"
import listService from "@/app/api/listService"
import { AxiosProgressEvent } from "axios"

const useAddListing = () => {
   const addListing = async (
    listing: ListingForm,
    onUploadProgress: (progress: AxiosProgressEvent) => void
  ) => {
    const data = new FormData()

    data.append("title", listing.title)
    data.append("price", listing.price)
    data.append("categoryId", JSON.parse(listing.category).value)

    if (listing.description) {
      data.append("description", listing.description)
    }

    listing.images.forEach((image, index) => {
      const file = {
        uri: image,
        name: `image-${index}`, // The name of the file (with extension)
        type: "image/jpeg", // The MIME type of the file
      }
      data.append("images", file as any)
    })

    console.info("FormData content:", data)

    if (listing.location) {
      data.append("location", JSON.stringify(listing.location))
    }

    try {
      await listService.post(data as any, onUploadProgress)
      onUploadProgress
    } catch (error) {
      console.log(error)
      alert("Couldn't save the listing")
    }
  }

  return {
    addListing,
  }
}

export default useAddListing
