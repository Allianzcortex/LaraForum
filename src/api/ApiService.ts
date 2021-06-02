import { Header, Type, Method, Status } from "./http";
import axios from "axios";

// axios.defaults.baseURL = "https://conduit.productionready.io/api/";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // TODO add handler
  }
);

export class ApiService<T> {
  public async get(url:string,body?: object | FormData): Promise<any> {
    return this.send(Method.Get, url,body);
  }
  public async post(url:string,body?: object | FormData): Promise<any> {
    return this.send(Method.Post, url,body);
  }
  public async delete(url:string,body?: object | FormData): Promise<any> {
    return this.send(Method.Delete, url,body);
  }

  public async send(
    method: Method,
    url: string,
    body?: object | FormData
  ): Promise<any> {
    const headers = new Headers();
    let requestBody;
    if (body) {
      if (body instanceof FormData) {
        requestBody = body;
      } else {
        headers.set(Header.ContentType, Type.JSON);
        requestBody = JSON.stringify(body);
      }
    }

    const options = {
      method: method,
      // data: requestBody,
      url: url,
    };
    // let res = await axios(options)
    let res;
    await axios(options)
      .then((response) => {
        res = response;
      })
      .catch((error) => {});
    return res;
    // TODO continue, handle error response and redirect
  }
}
