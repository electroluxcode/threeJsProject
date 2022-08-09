import axios from "axios";
let baseUrl = "";
import mainVue from "@/main";
const service = axios.create({
  baseURL: baseUrl, // api 的 base_url
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
  },
});
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    mainVue.$route.path === "/apartmentArea"
    // if (
    //   !window.localStorage.getItem("username") &&
    //   mainVue.$route.path === "/apartmentArea"
    // ) {
    //   alert("请重新登录");
    //   let timer = setTimeout(() => {
    //     clearTimeout(timer);
    //     mainVue.$router.push("/");
    //   }, 1500);
    // }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 导出通用请求axios
export default (opts) => {
  const result = service(opts);
  return result;
};
