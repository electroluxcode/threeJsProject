import Fetch from "../utils/Fetch";

let tag1 = "/apicity";

export const citylist = () => {
  return Fetch({
    method: "get",
    url: `${tag1}/city`,
  });
};

export const buildingDetail = () => {
  return Fetch({
    method: "get",
    url: `${tag1}/city/detail`,
  });
};

export const raychartlist = () => {
  return Fetch({
    method: "get",
    url: `${tag1}/city/raychart`,
  });
};

export const barchartlist = () => {
  return Fetch({
    method: "get",
    url: `${tag1}/city/barchart`,
  });
};

export const carPark = () => {
  return Fetch({
    method: "get",
    url: `${tag1}/city/park`,
  });
};

export const funnelchartlist = () => {
  return Fetch({
    method: "get",
    url: `${tag1}/city/funnel`,
  });
};

export const buildstatus = () => {
  return Fetch({
    method: "get",
    url: `${tag1}/city/buildstatus`,
  });
};
