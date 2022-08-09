import Fetch from "../utils/Fetch";
const qs = require("qs");
let tag1 = "/apicity";

export const alterTruck = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/truck/${data}`,
    data: qs.stringify(data),
  });
};

export const alterCar = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/car/${data}`,
    data: qs.stringify(data),
  });
};

export const alterBus = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/bus/${data}`,
    data: qs.stringify(data),
  });
};

export const alterBuilding = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/building/${data}`,
    data: qs.stringify(data),
  });
};

export const alterBasketabll = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/basketabll/${data}`,
    data: qs.stringify(data),
  });
};
export const alterParking = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/parking/${data}`,
    data: qs.stringify(data),
  });
};
export const alterRay = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/raychart/${data}`,
    data: qs.stringify(data),
  });
};

export const alterBar = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/barchart/${data}`,
    data: qs.stringify(data),
  });
};

export const alterFunnel = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/funnel/${data}`,
    data: qs.stringify(data),
  });
};

export const alterPie = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/buildingdetail/${data}`,
    data: qs.stringify(data),
  });
};
export const alterStatus = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/buildstatus/${data}`,
    data: qs.stringify(data),
  });
};

export const alterCarpark = (data) => {
  return Fetch({
    method: "put",
    url: `${tag1}/city/carpark/${data}`,
    data: qs.stringify(data),
  });
};
