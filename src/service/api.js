import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWRhMjVkZGFiMGU4NjgwMzM3M2JmODZkMDg3NjhlMiIsInN1YiI6IjYxMGI4MzhhZDRkNTA5MDAyZTQxN2FhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n8SAofb1C7UN2JoKuNvsXPxGKKlelso-zogf6cHtPIU";

const API_KEY = "25da25ddab0e86803373bf86d08768e2";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    api_key: API_KEY,
  },
});
