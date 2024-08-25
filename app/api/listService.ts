import APIClient from "./client"

export interface List {
  id: number
  title: string
  description: string
  images: { url: string; thumbnailUrl: string }[]
  price: number
  categoryId: number
  userId: number
  location: { latitude: number; longitude: number }
}

export default new APIClient<List>("/listings")
