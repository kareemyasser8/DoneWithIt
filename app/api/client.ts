import axios, { AxiosProgressEvent } from "axios"

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.3:9000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll() {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => {
      if (res.data) {
        return res.data
      } else {
        throw new Error(`Failed to fetch data: ${res}`)
      }
    })
  }

  post(
    data: T,
    onUploadProgress?: (progressPercentage: AxiosProgressEvent) => void
  ) {
    return axiosInstance
      .post<T>(this.endpoint, data, {
        onUploadProgress,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data) {
          return res.data
        } else {
          console.log(res)
          throw new Error(`Failed to post data: ${res}`)
        }
      })
      .catch((error) => {
        // Check if the error is an Axios error
        if (axios.isAxiosError(error)) {
          // Extract the response information for detailed logging
          const status = error.response?.status
          const statusText = error.response?.statusText
          const data = error.response?.data
          const headers = error.response?.headers

          // Log detailed error information
          console.error("Error Status:", status)
          console.error("Status Text:", statusText)
          console.error("Response Data:", data)
          console.error("Response Headers:", headers)

          // Throw a new error with detailed information
          throw new Error(
            `Failed to post data: ${status} ${statusText}. Data: ${JSON.stringify(
              data
            )}`
          )
        } else {
          // Handle other types of errors (non-Axios errors)
          console.error("Non-Axios error:", error)
          throw new Error("An unexpected error occurred")
        }
      })
  }

  patch(id: string, data: Partial<T>) {
    return axiosInstance
      .patch<T>(`${this.endpoint}/${id}`, data)
      .then((res) => {
        if (res.data) {
          return res.data
        } else {
          throw new Error(`Failed to update data: ${res}`)
        }
      })
  }

  delete(id: string) {
    return axiosInstance.delete<T>(`${this.endpoint}/${id}`).then((res) => {
      if (res.data) return true
      else throw new Error(`Failed to delete data: ${res}`)
    })
  }

  getById(id: string) {
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => {
      if (res.data) {
        return res.data
      } else {
        throw new Error(`Failed to fetch data by ID: ${res}`)
      }
    })
  }
}

export default APIClient
