import { jwtDecode } from "jwt-decode";

export const tokenDecode = (token) => {
  if (token) {
    const decodeData = jwtDecode(token);
    const expireTime = new Date(decodeData.exp * 1000);
    if (new Date() > expireTime) {
      localStorage.removeItem("canva_token");
      return "";
    } else {
      return decodeData;
    }
  } else {
    return "";
  }
};
