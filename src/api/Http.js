import axios from "axios";

class Http {
  instance; // bien cua class
  constructor() {
    // ham tao
    this.instance = axios.create({
      // trong ham tao no se gan cai bien do cho cai axios
      baseURL: "https://reqres.in/",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export const http = new Http().instance;
