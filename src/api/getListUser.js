import { http } from "./Http";

export const getProduct = (linkApi) => {
  return http.get(linkApi); // get lay dia chi trang web json , name la danh muc san pham , show goi name la danh muc san pham
};
