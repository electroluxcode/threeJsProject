import Fetch from "../utils/Fetch";
const qs = require("qs");
let tag = "/apicity";

export const userInfo = (data) => {
  return Fetch({
    method: "get",
    url: `${tag}/users`,
    params: data,
  });
};

export const registerUser = (data) => {
  return Fetch({
    method: "post",
    url: `${tag}/users`,
    data: qs.stringify(data),
  });
};

export const getUserInfo = () => {
  return Fetch({
    method: "get",
    url: `${tag}/users/getusers`,
  });
};

export const deleteUser = (data) => {
  return Fetch({
    method: "delete",
    url: `${tag}/users/${data}`,
  });
};

export const searchUserInfo = (data) => {
  return Fetch({
    method: "get",
    url: `${tag}/users/search`,
    params: data,
  });
};
