import axios, { AxiosProgressEvent } from "axios"
import authStorage from "@/auth/storage"

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.3:9000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await authStorage.getToken()
    config.headers["x-auth-token"] = token ? token : ""
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll() {
    return axiosInstance
      .get<T[]>(this.endpoint)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
        throw new Error("There is something wrong that happened")
      })
  }

  post(
    data: T,
    onUploadProgress?: (progressPercentage: AxiosProgressEvent) => void,
    headers?: any
  ) {
    return axiosInstance
      .post<T>(this.endpoint, data, {
        onUploadProgress,
        headers: headers ? headers : {},
      })
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          console.log(res);
          throw new Error(`Failed to post data: ${res}`);
        }
      })
      .catch((error) => {
        // Check if the error is an Axios error
        if (axios.isAxiosError(error)) {
          // Throw the error message from the response data if available
          if (error.response?.data?.error) {
            throw new Error(error.response.data.error);
          } else {
            // Otherwise, throw the status text or generic error message
            throw new Error(error.message || "An unexpected error occurred");
          }
        } else {
          // Handle other types of errors (non-Axios errors)
          console.error("Non-Axios error:", error);
          throw new Error(error.message || "An unexpected error occurred");
        }
      });
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
