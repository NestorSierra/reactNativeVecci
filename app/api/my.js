import client from "./client";

const endpoint = "/my/listings";

const getListings = () => client.get(endpoint);

export default {
  getListings,
};
